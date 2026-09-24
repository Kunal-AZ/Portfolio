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

/**
 * Submit contact form payload to backend with automatic multi-route fallback & timeout
 */
export async function sendContactMessage(formData) {
  const candidateUrls = getCandidateUrls("/api/contact");
  let lastError = null;

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
        7000 // 7-second max timeout per candidate
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        return {
          success: false,
          message:
            data?.message ||
            `Request failed with status ${response.status}. Please check your inputs.`,
        };
      }

      return { success: true, data };
    } catch (err) {
      lastError = err;
      continue;
    }
  }

  console.error("sendContactMessage failed across all candidates:", lastError);
  return {
    success: false,
    message:
      "Unable to send message right now. If your backend is sleeping, please try once more in a few seconds.",
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