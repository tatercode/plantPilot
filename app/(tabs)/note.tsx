import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Plant } from "@/types/Plant";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

// TODO: Implement actual call
import { mockPlants } from "@/mock-data/mock-plants";

export default function Tab() {
  const { plant: plantParam } = useLocalSearchParams();
  const plant: Plant = plantParam ? JSON.parse(plantParam as string) : null;
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(plant.note);

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Plant not found</Text>
      </View>
    );
  }

  const toggleEditMode = () => {
    if (!isEditing) {
      setEditedNote(plant.note || "");
    }
    setIsEditing(!isEditing);
  };

  // TODO: Implement actual saving functionality to db
  const handleSave = () => {
    for (let i = 0; i < mockPlants.length; i++) {
      if (mockPlants[i].id === plant.id) {
        mockPlants[i].note = editedNote;
        break;
      }
    }

    plant.note = editedNote;
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{plant.name} Notes</Text>
        <TouchableOpacity onPress={toggleEditMode}>
          <FontAwesome
            style={{ paddingRight: 20 }}
            name={isEditing ? "save" : "edit"}
            size={30}
            color="black"
            onPress={isEditing ? handleSave : toggleEditMode}
          />
        </TouchableOpacity>
      </View>

      {isEditing ? (
        <TextInput
          style={styles.textInput}
          multiline
          value={editedNote}
          onChangeText={setEditedNote}
          autoFocus
        />
      ) : (
        <Text style={styles.text}>
          {editedNote || "No notes available for this plant."}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0B6623",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  textInput: {
    fontSize: 16,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    minHeight: 150,
    textAlignVertical: "top",
  },
});
