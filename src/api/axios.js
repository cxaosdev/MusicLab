import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export async function fetchData() {
  try {
    const response = await axios.get("http://localhost:8000/api/apple-music");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
