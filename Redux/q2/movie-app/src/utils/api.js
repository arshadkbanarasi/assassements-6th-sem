import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: "YOUR_API_KEY", // replace with your OMDB API key
  },
});
