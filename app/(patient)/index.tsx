import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QuranAppScreen = () => {
  const [showQR, setShowQR] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation value for background color fade

  const patientDetails = {
    name: "Suhas Ghosal",
    age: 56,
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    // Start background color fade animation
    Animated.timing(fadeAnim, {
      toValue: 1, // Final value for the animation
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false, // Disable native driver for color interpolation
    }).start();
  };

  // Interpolate fadeAnim to switch from violet to white
  const backgroundColor = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#6B42A4', '#FFFFFF'], // From violet to white
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Greetings Patient</Text>
      <Text style={styles.subtitle}>Kindly share the QR with your Doctor.</Text>
      <Text style={styles.subtitle}>Name: {patientDetails.name} Age: {patientDetails.age}</Text>

      <Animated.View style={[styles.imageContainer, { backgroundColor }]}>
        {showQR ? (
          <QRCode 
            value={`Name: ${patientDetails.name}, Age: ${patientDetails.age}`}
            size={150} // Adjust the size to fit in the box
            color="black"
            backgroundColor="white"
          />
        ) : (
          <Image 
            source={{ uri: '' }} 
            style={styles.image} 
          />
        )}
      </Animated.View>

      <TouchableOpacity style={styles.button} onPress={handleGenerateQR}>
        <Text style={styles.buttonText}>Generate QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6B42A4', // Purple color
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E8E', // Light gray
    marginBottom: 30,
  },
  imageContainer: {
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#FF9676', // Orange color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuranAppScreen;
