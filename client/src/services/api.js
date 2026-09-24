import { projectsData } from "../data/projects";

// Live Render backend URL
const LIVE_RENDER_API = "https://portfolio-backend-q05y.onrender.com";

// Active API Base URL
const CONFIGURED_API_URL = import.meta.env.VITE_API_URL || LIVE_RENDER_API;

/**
 * Determine candidate API endpoints with fast fallbacks
 */
const getCandidateUrls = (endpoint) => {
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  if (isLocal) {
    return [
      `http://127.0.0.1:5000${endpoint}`,
      `http://localhost:5000${endpoint}`,
      endpoint,
      `${LIVE_RENDER_API}${endpoint}`,
    ];
  }

  // On Vercel / Production:
  // Primary direct Render backend, then relative rewrite endpoint
  const raw = [
    `${CONFIGURED_API_URL}${endpoint}`,
    endpoint,
    `${LIVE_RENDER_API}${endpoint}`,
  ];
  return [...new Set(raw)];
};

/**
 * Pre-warm the backend silently on app mount to avoid Render cold-start latency
 */
export function prewarmBackend() {
  try {
    fetch(`${LIVE_RENDER_API}/api/health`, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
    }).catch(() => {});
  } catch {
    // Ignore pre-warm errors
  }
}

// Automatically trigger pre-warm on module load
if (typeof window !== "undefined") {
  prewarmBackend();
}

/**
 * Helper to fetch with a strict timeout (prevents hanging indefinitely)
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// Formspree Endpoint for instant HTTPS email delivery to kunalsharma9637@gmail.com
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/mgavyjbp";

/**
 * Submit contact form payload:
 * 1. Delivers instant email to Kunal via Formspree over HTTPS (Port 443, 0 Cloudflare challenges, < 800ms)
 * 2. Concurrently stores message into MongoDB Atlas via Node/Express backend
 */
export async function sendContactMessage(formData) {
  // 1. Parallel database save to MongoDB Atlas via backend
  const candidateUrls = getCandidateUrls("/api/contact");
  const saveToDatabase = async () => {
    for (const url of candidateUrls) {
      try {
        const response = await fetchWithTimeout(
          url,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(formData),
          },
          6000
        );
        if (response.ok) {
          return await response.json().catch(() => null);
        }
      } catch {
        continue;
      }
    }
    return null;
  };

  const dbPromise = saveToDatabase();

  // 2. Deliver email notification immediately via Formspree HTTPS API (< 1s)
  try {
    const formspreeResponse = await fetchWithTimeout(
      FORMSPREE_ENDPOINT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name}`,
          _subject: `📬 Portfolio Contact: ${formData.subject || "New Inquiry"} (${formData.name})`,
          message: formData.message,
        }),
      },
      7000
    );

    const formspreeData = await formspreeResponse.json().catch(() => null);

    if (formspreeResponse.ok && (formspreeData?.ok || formspreeData?.next)) {
      // Ensure DB save has a moment to settle in parallel without blocking user
      await dbPromise.catch(() => {});
      return {
        success: true,
        message:
          "Thank you! Your message has been sent directly to Kunal's inbox and recorded.",
        data: formspreeData,
      };
    }
  } catch (formspreeErr) {
    console.warn("Formspree delivery notice, falling back to database:", formspreeErr);
  }

  // 3. Fallback: If Formspree had a client network glitch, return backend status
  const dbResult = await dbPromise;
  if (dbResult && dbResult.success) {
    return {
      success: true,
      message:
        "Thank you! Your message has been received and saved. Kunal will get back to you shortly.",
      data: dbResult,
    };
  }

  return {
    success: false,
    message:
      "Unable to send message right now. Please try again or reach out directly at kunalsharma9637@gmail.com.",
  };
}

/**
 * Fetch projects from API with resilient local fallback
 */
export async function getProjects() {
  const candidateUrls = getCandidateUrls("/api/projects");

  for (const url of candidateUrls) {
    try {
      const response = await fetchWithTimeout(url, {}, 5000);
      if (response.ok) {
        const result = await response.json();
        if (result?.data) return result.data;
      }
    } catch {
      continue;
    }
  }

  return projectsData;
}

/**
 * Check backend health status
 */
export async function checkServerHealth() {
  const candidateUrls = getCandidateUrls("/api/health");

  for (const url of candidateUrls) {
    try {
      const response = await fetchWithTimeout(url, {}, 4000);
      if (response.ok) {
        return await response.json();
      }
    } catch {
      continue;
    }
  }

  return { success: false, status: "offline" };
}