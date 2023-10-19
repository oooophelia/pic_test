import { useState, useEffect } from "react";
import { fetchRandomGif } from "../src/api/giphyApiService";

/**
 * A custom hook for fetching and managing random GIF data.
 *
 * @returns {Object} - An object containing randomGif data and error information.
 */
export const useRandomGif = () => {
  const [randomGif, setRandomGif] = useState(null);
  const [fetchRandomGifError, setFetchRandomGifError] = useState("");

  const loadRandomGif = async () => {
    try {
      const randomGif = await fetchRandomGif();
      setRandomGif(randomGif);
      setFetchRandomGifError("");
    } catch (error) {
      setFetchRandomGifError(error.message);
    }
  };

  useEffect(() => {
    loadRandomGif();
    const interval = setInterval(loadRandomGif, 1000000000000); // 10000
    return () => clearInterval(interval);
  }, []);

  return {
    randomGif,
    fetchRandomGifError,
  };
};
