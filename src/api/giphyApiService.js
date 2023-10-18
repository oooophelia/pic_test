import react from "react";
import axios from "axios";
import { GIPHY_API_KEY } from "@env";

export const fetchSearchResults = async (searchText) => {
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIPHY_API_KEY,
      q: searchText,
      limit: 12,
    },
  });
  if (response.status === 200) {
    return response.data.data;
  } else {
    throw new Error("Failed to fetch search results");
  }
};

export const fetchRandomGif = async (searchText) => {
  const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
    params: {
      api_key: GIPHY_API_KEY,
    },
  });
  if (response.status === 200) {
    return response.data.data;
  } else {
    throw new Error("Failed to fetch random gif");
  }
};
