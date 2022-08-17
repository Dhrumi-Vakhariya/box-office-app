const API_BASE_URL = "https://api.tvmaze.com";

export async function apiGet(params) {
  const response = await fetch(`${API_BASE_URL}${params}`).then(res =>
    res.json()
  );
  // throw new Error("Something went wrong!");
  return response;
}
