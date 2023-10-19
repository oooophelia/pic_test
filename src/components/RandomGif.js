import { View } from "react-native";
import GifCard from "./GifCard";
import ErrorText from "./ErrorText";
import TitleLabel from "./TitleLabel";

/**
 * The Random Gif component displays a randomly selected GIF or an error message.
 *
 * @param {object} randomGif - The randomly selected GIF data.
 * @param {string} fetchRandomGifError - Error message if fetching the random GIF failed.
 * @returns {JSX.Element} - A component displaying the random GIF or an error message.
 */
const RandomGif = ({ randomGif, fetchRandomGifError }) => {
  const hasFetchingFailed = fetchRandomGifError !== "";
  const isGifLoaded = randomGif !== null;

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
            rating={randomGif.rating}
          />
        )
      )}
    </View>
  );
};

export default RandomGif;
