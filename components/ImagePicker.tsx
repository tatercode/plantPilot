import { useState, useEffect } from "react";
import { Image, View, StyleSheet, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface ImagePickerProps {
  onClose: () => void;
  onImagePicked: (uri: string) => void;
}

export default function ImagePickerExample({ onClose, onImagePicked }: ImagePickerProps) {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    pickImage();
  }, []);

  if (image) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.buttonContainer}>
          <Button title="Retake" onPress={pickImage} />
          <Button title="Use Photo" onPress={() => onImagePicked(image)} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Close" onPress={onClose} />
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
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
  },
});
