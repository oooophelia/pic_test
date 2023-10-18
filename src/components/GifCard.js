import { View, Text, Image, Dimensions, StyleSheet } from "react-native";

const ScreenHeight = Dimensions.get("window").height;

const GifCard = ({ url, title, shotenedUrl }) => {
  return (
    <View>
      <Image
        source={{
          uri: url,
        }}
        style={styles.gif}
      />
      <Text style={styles.title}>{title}</Text>
      <Text>{shotenedUrl}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gif: {
    height: ScreenHeight * 0.4,
  },
  title: {
    marginTop: 15,
  },
});

export default GifCard;
