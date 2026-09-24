import { projectsData } from "../data/projects";

// Live Render backend URL
const LIVE_RENDER_API = "https://portfolio-backend-q05y.onrender.com";

// Base URL precedence: Environment Variable -> Live Render URL
const CONFIGURED_API_URL = import.meta.env.VITE_API_URL || LIVE_RENDER_API;

/**
 * Determine candidate API endpoints to try (local first, then production Render fallback)
 */
const getCandidateUrls = (endpoint) => {
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  if (isLocal) {
    return [
      endpoint, // Vite proxy (/api/contact)
      `http://127.0.0.1:5000${endpoint}`, // Direct local IPv4
      `http://localhost:5000${endpoint}`, // Direct localhost
      `${LIVE_RENDER_API}${endpoint}`, // Live Render fallback if local server is stopped!
    ];
  }

  // On Vercel / Production:
  return [
    `${CONFIGURED_API_URL}${endpoint}`,
    `${LIVE_RENDER_API}${endpoint}`,
    endpoint, // Vercel rewrite fallback
  ];
};

/**
 * Submit contact form payload to backend with automatic multi-route fallback
 */
export async function sendContactMessage(formData) {
  const candidateUrls = getCandidateUrls("/api/contact");
  let lastError = null;

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

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
      // Try next candidate URL in list
      continue;
    }
  }

  console.error("sendContactMessage failed across all candidates:", lastError);
  return {
    success: false,
    message:
      "Unable to connect to the backend server. If using Render free tier, the server may take up to 30 seconds to wake up from idle. Please wait a moment and try again.",
  };
}

/**
 * Fetch projects from API with resilient local fallback
 */
export async function getProjects() {
  const candidateUrls = getCandidateUrls("/api/projects");

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url);
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
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch {
      continue;
    }
  }

  return { success: false, status: "offline" };
}