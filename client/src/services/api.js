import { projectsData } from "../data/projects";

// In production on Vercel/Render, VITE_API_URL can point to the backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

/**
 * Submit contact form payload to backend
 */
export async function sendContactMessage(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error("API sendContactMessage error:", error);
    return {
      success: false,
      message:
        error.message ||
        "Unable to send message right now. Please verify your connection or try again later.",
    };
  }
}

/**
 * Fetch projects from API with resilient local fallback
 */
export async function getProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    if (!response.ok) {
      throw new Error("Failed to fetch projects from API");
    }
    const result = await response.json();
    return result.data || projectsData;
  } catch (error) {
    console.warn("Using offline/fallback projects data:", error.message);
    return projectsData;
  }
}

/**
 * Check backend health status
 */
export async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    if (!response.ok) throw new Error("Health check failed");
    return await response.json();
  } catch (error) {
    return { success: false, status: "offline", error: error.message };
  }
}
