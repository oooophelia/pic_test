import { useState, useEffect } from "react";
import { fetchRandomGif } from "../src/api/giphyApiService";

export function useRandomGif() {
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
    const interval = setInterval(loadRandomGif, 10000);
    return () => clearInterval(interval);
  }, []);

  return {
    randomGif,
    fetchRandomGifError,
  };
}
