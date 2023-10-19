import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ScreenStyle from "../styles/ScreenStyle";
import GifCard from "../components/GifCard";
import { useNavigation } from "@react-navigation/native";

/**
 * The DetailScreen displays a detailed information about a selected GIF, including its image, title, and rating.
 *
 * @param {object} route - The route object containing the url, title, shortenedUrl and rating of the selected gif.
 */
const DetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { url, title, shortenedUrl, rating } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={ScreenStyle.style}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Feather
            name="chevron-left"
            size={35}
            color="black"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <GifCard
        url={url}
        title={title}
        shortenedUrl={shortenedUrl}
        rating={rating}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backIcon: {
    marginLeft: -12,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailScreen;
