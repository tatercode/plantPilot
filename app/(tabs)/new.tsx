import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import { mockPlants } from "@/mock-data/mock-plants";
import { Plant } from "@/types/Plant";
import { router } from "expo-router";
import ImagePickerExample from "@/components/ImagePicker";
import TakePhoto from "@/components/TakePhoto";

// TODO: Add way to add photo

export default function Tab() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleCreatePlant = () => {
    // validate name
    if (!name.trim()) {
      Alert.alert("Error", "Plant name is required");
      return;
    }

    const newPlant: Plant = {
      id: (mockPlants.length + 1).toString(),
      name: name.trim(),
      note: note.trim(),
    };

    // TODO: Add to database
    mockPlants.push(newPlant);

    Alert.alert("Success", "New plant added successfully", [
      {
        text: "OK",
        onPress: () => {
          setName("");
          setNote("");
          router.push("/");
        },
      },
    ]);
  };

  const handleTakePhoto = (uri: string) => {
    setImage(uri);
    setIsCameraOpen(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Plant</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Plant Name *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter plant name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Care Notes</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={note}
          onChangeText={setNote}
          placeholder="Enter care instructions or notes"
          multiline
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Pick an image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsCameraOpen(true)}
        >
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isCameraOpen}
        onRequestClose={() => setIsCameraOpen(false)}
      >
        <TakePhoto
          onClose={() => setIsCameraOpen(false)}
          onPictureTaken={handleTakePhoto}
        />
      </Modal>

      <TouchableOpacity style={styles.button} onPress={handleCreatePlant}>
        <Text style={styles.buttonText}>Add Plant</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0B6623",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#0B6623",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
