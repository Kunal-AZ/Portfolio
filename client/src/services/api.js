import { projectsData } from "../data/projects";

// In production, VITE_API_URL points to the deployed backend URL (e.g. Render)
const CONFIGURED_API_URL = import.meta.env.VITE_API_URL || "";

/**
 * Determine candidate API endpoints to try (proxy first, then direct local fallback)
 */
const getCandidateUrls = (endpoint) => {
  if (CONFIGURED_API_URL) {
    return [`${CONFIGURED_API_URL}${endpoint}`];
  }

  // Local development candidates:
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  if (isLocal) {
    return [
      endpoint, // Vite proxy (/api/contact)
      `http://127.0.0.1:5000${endpoint}`, // Direct IPv4
      `http://localhost:5000${endpoint}`, // Direct localhost
    ];
  }

  return [endpoint];
};

/**
 * Submit contact form payload to backend with automatic fallback
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
      "Unable to connect to the backend server. Please make sure your backend is running by running 'npm run dev' in your terminal.",
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