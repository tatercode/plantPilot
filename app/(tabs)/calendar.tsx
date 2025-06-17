import { View, Text, StyleSheet } from "react-native";

// TODO: Calendar that displays date watered per plant

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
