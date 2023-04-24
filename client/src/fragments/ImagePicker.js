import React, { useState } from "react";
import { Button, Image, View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerComponent({ onPick }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    onPick && onPick(result.assets[0].uri);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text>Image Icon</Text>
        )}
      </View>
      <Button title="Select Image" onPress={pickImage} color="#40513B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 10,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#888888",
    borderRadius: 10,
    backgroundColor: "#aaaaaa",
    overflow: "hidden",
  },
  image: { width: "100%", height: undefined, aspectRatio: 1 },
});
