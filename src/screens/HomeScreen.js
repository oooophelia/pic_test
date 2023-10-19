import { View, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import RandomGif from "../components/RandomGif";
import SearchResults from "../components/SearchResults";
import ScreenStyle from "../styles/ScreenStyle";
import { useRandomGif } from "../../hooks/useRandomGif";
import { useSearchResults } from "../../hooks/useSearchResults";

/**
 * The HomeScreen displays a search bar and either a random GIF or search results.
 */
const HomeScreen = () => {
  const { randomGif, fetchRandomGifError } = useRandomGif();
  const {
    searchResults,
    fetchSearchResultsError,
    showRandomGif,
    handleOnSearch,
  } = useSearchResults();

  return (
    <SafeAreaView style={ScreenStyle.style}>
      <View>
        <SearchBar onSearch={handleOnSearch} />
        {showRandomGif ? (
          <RandomGif
            randomGif={randomGif}
            fetchRandomGifError={fetchRandomGifError}
          />
        ) : (
          <SearchResults
            searchResults={searchResults}
            fetchSearchResultsError={fetchSearchResultsError}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
