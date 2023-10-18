import { Text, StyleSheet } from "react-native";

const TitleLabel = ({ label }) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
  },
});

export default TitleLabel;
