import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import RandomGif from "../components/RandomGif";
import ScreenStyle from "../styles/ScreenStyle";
import { fetchSearchResults } from "../api/giphyApiService";
import SearchResults from "../components/SearchResults";
import debounce from "lodash/debounce";
import ErrorText from "../components/ErrorText";

const HomeScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [fetchSearchResultsError, setFetchSearchResultsError] = useState("");
  const [showRandomGif, setShowRandomGif] = useState(true);

  const handleOnSearch = debounce(async (searchText) => {
    if (searchText == "") {
      setShowRandomGif(true);
      return;
    }
    setShowRandomGif(false);
    try {
      const searchResults = await fetchSearchResults(searchText);
      setSearchResults(searchResults);
      setFetchSearchResultsError("");
    } catch (error) {
      setSearchResults([]);
      setFetchSearchResultsError(error.toString());
      console.error("Error searching GIFs:", error);
    }
  }, 300);

  const searchResultContent =
    fetchSearchResultsError != "" ? (
      <ErrorText error={fetchSearchResultsError} />
    ) : (
      <SearchResults gifs={searchResults} />
    );

  return (
    <SafeAreaView style={ScreenStyle.style}>
      <View>
        <SearchBar onSearch={handleOnSearch} />
        {showRandomGif ? <RandomGif /> : searchResultContent}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
