import { StyleSheet, Text } from "react-native";

/**
 *
 *
 * The ErrorText component displays an error message in red text.
 *
 * @param {string} error - The error message to display.
 * @returns {JSX.Element} - A Text component displaying the error message in red.
 */
const ErrorText = ({ error }) => {
  return <Text style={style.error}>{error}</Text>;
};

const style = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorText;
