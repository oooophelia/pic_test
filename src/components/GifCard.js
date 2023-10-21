import { View, Text, Image, StyleSheet } from "react-native";

/**
 * The Gif Card component displays a Gif content with a title, shortened URL, and age restriction badge.
 *
 * @param {string} url - The URL of the Gif image.
 * @param {string} title - The title of the Gif.
 * @param {string} shortenedUrl - The shortened URL of the Gif.
 * @param {string} rating - The age restriction of the Gif.
 * @returns {JSX.Element} - A component displaying the Gif, title, URL, and age restriction badge.
 */
const GifCard = ({ url, title, shortenedUrl, rating }) => {
  return (
    <View>
      <Image
        source={{
          uri: url,
        }}
        style={styles.gif}
      />
      <View style={styles.info}>
        <View>
          <Text>{title}</Text>
          <Text>{shortenedUrl}</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gif: {
    height: 400,
  },
  info: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    width: 55,
    height: 55,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#676766",
  },
  ratingText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GifCard;
