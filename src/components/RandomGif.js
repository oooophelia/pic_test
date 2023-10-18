import { View } from "react-native";
import { useState, useEffect } from "react";
import { fetchRandomGif } from "../api/giphyApiService";
import GifCard from "./GifCard";
import ErrorText from "./ErrorText";
import TitleLabel from "./TitleLabel";

const RandomGif = () => {
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
    const interval = setInterval(loadRandomGif, 10000); //10000
    return () => clearInterval(interval);
  }, []);

  const hasFetchingFailed = fetchRandomGifError != "";
  const isGifLoaded = randomGif != null;

  return (
    <View>
      <TitleLabel label={"Random selected GIF:"} />
      {hasFetchingFailed ? (
        <ErrorText error={fetchRandomGifError} />
      ) : (
        isGifLoaded && (
          <GifCard
            url={randomGif.images.original.url}
            title={randomGif.title}
            shotenedUrl={randomGif.bitly_url}
          />
        )
      )}
    </View>
  );
};

export default RandomGif;
