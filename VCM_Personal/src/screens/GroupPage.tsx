import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MediaType, launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';

const GroupPage = () => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);


  const OpenCamera = async () => {
    const options: ImageLibraryOptions = {
        mediaType: 'photo',  // Specify the media type (photo or video)
        maxWidth: 800,       // Maximum width of the selected image
        maxHeight: 600,      // Maximum height of the selected image
        quality: 0.8,        // Image quality, a number between 0 and 1
        includeBase64: false, // Whether to include the image as base64-encoded string
        selectionLimit: 1,   // Limit the number of selected images
      };
    try {
      const result = await launchImageLibrary(options);
      console.log(result);
      if (!result.didCancel && result.assets) {
        const selectedUri = result.assets[0]?.uri;
        setSelectedImage(selectedUri); // Set the selected image URI
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }
  return (
    <View style={styles.mainStyle}>
      <Text>Group Page</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={OpenCamera}>
        <Text style={styles.textStyel}>
          Choose img
        </Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginTop: 20, alignSelf: 'center' }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: 'white',
    padding: 20,
    height: 800,
  },
  buttonStyle: {
    borderWidth: 0.7,
    borderRadius: 20,
    width: 160,
    height: 70,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  textStyel: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 22,
    marginTop: 15,
  }
});

export default GroupPage;
