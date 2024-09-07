import React, { useState, useRef, createContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Prescriptions data
const prescriptions = {
  "prescriptions": [
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Mild fever and sore throat",
      "medication": "Paracetamol 500mg - 2 times a day",
      "tests": "No tests required"
    },
    {
      "name": "Bob Johnson",
      "age": 45,
      "gender": "Male",
      "summary_of_diagnosis": "High cholesterol",
      "medication": "Atorvastatin 20mg - Once a day",
      "tests": "Lipid profile"
    },
    {
      "name": "Charlie Brown",
      "age": 25,
      "gender": "Male",
      "summary_of_diagnosis": "Mild acne",
      "medication": "Clindamycin 1% gel - Twice a day",
      "tests": "No tests required"
    },
    {
      "name": "Daisy Ridley",
      "age": 35,
      "gender": "Female",
      "summary_of_diagnosis": "Hypothyroidism",
      "medication": "Levothyroxine 100mcg - Once a day",
      "tests": "TSH levels"
    }
    // Add more patients as needed...
  ]
};

// Create context to share selected patient info
export const PatientContext = createContext();

const QuranAppScreen = () => {
  const [showQR, setShowQR] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null); // State to hold the selected patient
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Function to pick a random prescription (patient)
  const getRandomPrescription = () => {
    const randomIndex = Math.floor(Math.random() * prescriptions.prescriptions.length);
    const randomPrescription = prescriptions.prescriptions[randomIndex];
    setSelectedPatient(randomPrescription);
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    getRandomPrescription(); // Set random prescription
    // Start background color fade animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // Interpolate fadeAnim to switch from violet to white
  const backgroundColor = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#6B42A4', '#FFFFFF'], // Violet to white
  });

  return (
    <PatientContext.Provider value={selectedPatient}>
      <View style={styles.container}>
        <Text style={styles.title}>Greetings Patient</Text>
        <Text style={styles.subtitle}>Kindly share the QR with your Doctor.</Text>

        {selectedPatient ? (
          <Text style={styles.subtitle}>
            Name: {selectedPatient.name}, Age: {selectedPatient.age}, Diagnosis: {selectedPatient.summary_of_diagnosis}
          </Text>
        ) : (
          <Text style={styles.subtitle}>No prescription selected</Text>
        )}

        <Animated.View style={[styles.imageContainer, { backgroundColor }]}>
          {showQR && selectedPatient ? (
            <QRCode
              value={JSON.stringify(selectedPatient)}
              size={150} // Adjust the size to fit in the box
              color="black"
              backgroundColor="white"
            />
          ) : (
            <Text>No QR Code Generated</Text>
          )}
        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={handleGenerateQR}>
          <Text style={styles.buttonText}>Generate QR</Text>
        </TouchableOpacity>
      </View>
    </PatientContext.Provider>
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
    textAlign: 'center',
  },
  imageContainer: {
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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
