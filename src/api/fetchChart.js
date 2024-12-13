import axios from "axios";

async function fetchChartData(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;

    const divided = [
      data.slice(0, 100),
      data.slice(100, 200),
      data.slice(200, 300),
    ];
    return divided;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
}

export async function fetchAppleMusicChart() {
  return await fetchChartData("http://localhost:8000/api/apple-music");
}

export async function fetchYoutubeChart() {
  return await fetchChartData("http://localhost:8000/api/youtube");
}

export async function fetchSpotifyChart() {
  return await fetchChartData("http://localhost:8000/api/spotify");
}
