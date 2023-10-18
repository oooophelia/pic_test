import GIFCard from "./GifCard";
import TitleLabel from "./TitleLabel";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ gifs }) => {
  const navigation = useNavigation();

  const renderImageItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", {
            id: item.id,
            URL: item.bitly_gif_url,
            title: item.title,
          });
        }}
      >
        <Image source={{ uri: item.images.original.url }} style={styles.gif} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TitleLabel label={"Search results:"} />
      <FlatList
        data={gifs}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
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
