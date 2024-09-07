import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

const Index = ({ navigation }) => {

  const handlePress = () => {
    if (Platform.OS === 'web') {
      // Perform a full redirect to /test
      window.location.href = '/test';
    } else {
      // Navigate using React Navigation for mobile
      navigation.navigate('Test');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.headerText}>Get to know about your patient Doc!</Text>

      {/* Illustration */}
      <Image
        source={{ uri: "https://i.ibb.co/FbQgmJs/image.png" }}
        style={styles.image}
      />

      {/* TouchableOpacity Button */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#715AFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFD500',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Index; 