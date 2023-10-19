import react from "react";
import axios from "axios";
import { GIPHY_API_KEY } from "@env";

/**
 * Searches gifs from the Giphy API.
 *
 * @param {string} searchText - The search text.
 * @returns {Promise<Array>} - A Promise that resolves to an array of gifs.
 * @throws {Error} - Throws an error if the request fails.
 */
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

/**
 * Fetches a random GIF from the Giphy API.
 *
 * @returns {Promise<Object>} - A Promise that resolves to a gif.
 * @throws {Error} - Throws an error if the request fails.
 */
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
