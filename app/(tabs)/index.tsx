import { View, StyleSheet } from "react-native";
import PlantRow from "@/components/PlantRow";
import { Plant } from "@/types/Plant";

// TODO: Implement actual call to db
import { mockPlants } from "@/mock-data/mock-plants";

export default function Tab() {
  return (
    <View style={styles.container}>
      {mockPlants.map((plant) => (
        <PlantRow key={plant.id} plant={plant as Plant} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    gap: 16,
  },
});
