import TitleLabel from "./TitleLabel";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ErrorText from "./ErrorText";
import { useNavigation } from "@react-navigation/native";

/**
 * The SearchResults component displays gif search results in a grid of images.
 *
 * @param {Array} searchResults - An array of gifs.
 * @param {string} fetchSearchResultsError - Error message when fetching results fails.
 * @returns {JSX.Element} - A component displaying search results or an error message.
 */
const SearchResults = ({ searchResults, fetchSearchResultsError }) => {
  const navigation = useNavigation();
  const hasFetchingFailed = fetchSearchResultsError != "";

  const renderImageItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", {
            url: item.images.original.url,
            title: item.title,
            shortenedUrl: item.bitly_gif_url,
            rating: item.rating,
          });
        }}
      >
        <Image source={{ uri: item.images.downsized.url }} style={styles.gif} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TitleLabel label={"Search results:"} />
      {hasFetchingFailed ? (
        <ErrorText error={fetchSearchResultsError} />
      ) : (
        <FlatList
          data={searchResults}
          renderItem={renderImageItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gif: {
    width: 105,
    height: 105,
    margin: 5,
  },
});

export default SearchResults;
