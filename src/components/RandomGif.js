import { View } from "react-native";
import GifCard from "./GifCard";
import ErrorText from "./ErrorText";
import TitleLabel from "./TitleLabel";

const RandomGif = ({ randomGif, fetchRandomGifError }) => {
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
            url={randomGif.images.downsized.url}
            title={randomGif.title}
            shortenedUrl={randomGif.bitly_url}
          />
        )
      )}
    </View>
  );
};

export default RandomGif;
