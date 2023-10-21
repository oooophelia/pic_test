import { useState } from "react";
import debounce from "lodash/debounce";
import { fetchSearchResults } from "../api/giphyApiService";

/**
 * A custom hook for handling search results and debounced search functionality.
 *
 * @returns {Object} - An object containing search results, error information, showRandomGif flag, and search handler.
 */
export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [fetchSearchResultsError, setFetchSearchResultsError] = useState("");
  const [showRandomGif, setShowRandomGif] = useState(true);

  const handleOnSearch = debounce(async (searchText) => {
    if (searchText.length < 2) {
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
    }
  }, 300);

  return {
    searchResults,
    fetchSearchResultsError,
    showRandomGif,
    handleOnSearch,
  };
};
