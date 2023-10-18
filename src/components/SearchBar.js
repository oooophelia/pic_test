import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useRef, useCallback, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef(null);

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  const handleClear = () => {
    handleSearch("");
  };

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleCancel = () => {
    handleSearch("");
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  };

  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarContent}>
          <View style={styles.searchBarContentLeft}>
            <Feather name="search" size={20} color="gray" />
            <TextInput
              ref={textInputRef}
              style={styles.searchTextInput}
              placeholder="Search"
              value={searchText}
              onChangeText={(newSearchText) => handleSearch(newSearchText)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </View>
          <TouchableOpacity onPress={handleClear}>
            <Entypo name="circle-with-cross" size={19} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      {isFocused && (
        <TouchableOpacity onPress={handleCancel}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  searchBar: {
    backgroundColor: "#d3d3d3",
    flexDirection: "row",
    padding: 10,
    borderRadius: 7,
    flex: 1,
  },
  searchBarContent: {
    flexDirection: "row",
    flex: 1,
  },
  searchBarContentLeft: {
    flexDirection: "row",
    flex: 1,
  },
  searchTextInput: {
    marginLeft: 10,
    flex: 1,
  },
  cancelBtn: {
    marginLeft: 15,
  },
});

export default SearchBar;
