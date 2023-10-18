import { StyleSheet, Text } from "react-native";

const ErrorText = ({ error }) => {
  return <Text style={style.error}>{error}</Text>;
};

const style = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorText;
