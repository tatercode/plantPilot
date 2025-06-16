import { View, Text, StyleSheet } from "react-native";
import { Plant } from "@/types/Plant";
import { useLocalSearchParams } from "expo-router";

export default function Tab() {
  const { plant: plantParam } = useLocalSearchParams();
  const plant: Plant = plantParam ? JSON.parse(plantParam as string) : null;

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Plant not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plant.name} Notes</Text>
      <Text style={styles.text}>
        {plant.note || "No notes available for this plant."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#0B6623",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
