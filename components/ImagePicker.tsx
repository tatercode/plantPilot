import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button title="Pick an image" onPress={pickImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  buttonContainer: {
    backgroundColor: "#DAA520",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
