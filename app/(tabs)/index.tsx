import { View, StyleSheet } from "react-native";
import PlantRow from "@/components/PlantRow";
import { Plant } from "@/types/Plant";

const mockData = [
  {
    id: "1",
    name: "Monstera",
    note: "Water once a week. Keep in bright, indirect light.",
  },
  {
    id: "2",
    name: "Pothos",
    note: "Very tolerant of low light. Water when soil is dry.",
  },
  {
    id: "3",
    name: "Golden Ivy",
    note: "Keep soil moist but not soggy. Prefers partial shade.",
  },
  {
    id: "4",
    name: "Chinese Money Plant",
    note: "Allow soil to dry between waterings. Rotate regularly for even growth.",
  },
];

export default function Tab() {
  return (
    <View style={styles.container}>
      {mockData.map((plant) => (
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
