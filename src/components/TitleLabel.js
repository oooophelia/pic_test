import { Text, StyleSheet } from "react-native";

/**
 * The Title Label component renders headings/title for screens.
 *
 * @param {string} label - The text to display as the title.
 * @returns {JSX.Element} - A Text component displaying the title.
 */
const TitleLabel = ({ label }) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
});

export default TitleLabel;
