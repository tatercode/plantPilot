import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Plant } from "../types/Plant";
import { useRouter } from "expo-router";

interface PlantRowProps {
  plant: Plant;
}
export default function PlantRow({ plant }: PlantRowProps): React.JSX.Element {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/(tabs)/note",
      params: { plant: JSON.stringify(plant) },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FontAwesome name="leaf" size={24} color="#0B6623" />
      <Text style={styles.name}>{plant.name}</Text>
      <Text style={styles.note} numberOfLines={1} ellipsizeMode="tail">
        {plant.note}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderRadius: 8,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    height: 80,
    backgroundColor: "#FAF9F6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  note: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
});
