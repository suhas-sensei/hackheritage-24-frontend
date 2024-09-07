import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

// Your updated prescription data
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
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Seasonal allergy with mild rash",
      "medication": "Cetirizine 10mg - Once a day",
      "tests": "No tests required"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Migraine headaches",
      "medication": "Ibuprofen 400mg - As needed",
      "tests": "No tests required"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Urinary tract infection (UTI)",
      "medication": "Nitrofurantoin 100mg - 2 times a day",
      "tests": "Urine culture"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Hypertension",
      "medication": "Lisinopril 10mg - Once a day",
      "tests": "Blood pressure monitoring"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Iron deficiency anemia",
      "medication": "Ferrous sulfate 325mg - Once a day",
      "tests": "Complete blood count (CBC)"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Acute bronchitis",
      "medication": "Amoxicillin 500mg - 3 times a day",
      "tests": "Chest X-ray"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Gastroesophageal reflux disease (GERD)",
      "medication": "Omeprazole 20mg - Once a day",
      "tests": "Upper endoscopy (if symptoms persist)"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Acute sinusitis",
      "medication": "Augmentin 875mg - Twice a day",
      "tests": "Sinus CT scan (if no improvement)"
    },
    {
      "name": "Alice Smith",
      "age": 30,
      "gender": "Female",
      "summary_of_diagnosis": "Vitamin D deficiency",
      "medication": "Vitamin D3 2000 IU - Once a day",
      "tests": "25-Hydroxy vitamin D blood test"
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
      "name": "Bob Johnson",
      "age": 45,
      "gender": "Male",
      "summary_of_diagnosis": "Type 2 diabetes",
      "medication": "Metformin 500mg - Twice a day",
      "tests": "HbA1c"
    },
    {
      "name": "Bob Johnson",
      "age": 45,
      "gender": "Male",
      "summary_of_diagnosis": "Chronic back pain",
      "medication": "Naproxen 250mg - As needed",
      "tests": "MRI scan"
    },
    {
      "name": "Bob Johnson",
      "age": 45,
      "gender": "Male",
      "summary_of_diagnosis": "Seasonal allergies",
      "medication": "Loratadine 10mg - Once a day",
      "tests": "No tests required"
    },
    {
      "name": "Bob Johnson",
      "age": 45,
      "gender": "Male",
      "summary_of_diagnosis": "Anxiety",
      "medication": "Alprazolam 0.25mg - As needed",
      "tests": "Psychiatric evaluation"
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
      "name": "Charlie Brown",
      "age": 25,
      "gender": "Male",
      "summary_of_diagnosis": "Asthma",
      "medication": "Salbutamol Inhaler - As needed",
      "tests": "Spirometry"
    },
    {
      "name": "Charlie Brown",
      "age": 25,
      "gender": "Male",
      "summary_of_diagnosis": "Seasonal allergies",
      "medication": "Fexofenadine 180mg - Once a day",
      "tests": "Allergy skin test"
    },
    {
      "name": "Charlie Brown",
      "age": 25,
      "gender": "Male",
      "summary_of_diagnosis": "GERD",
      "medication": "Pantoprazole 40mg - Once a day",
      "tests": "Endoscopy"
    },
    {
      "name": "Charlie Brown",
      "age": 25,
      "gender": "Male",
      "summary_of_diagnosis": "Insomnia",
      "medication": "Zolpidem 10mg - As needed",
      "tests": "Sleep study"
    },

    {
      "name": "Daisy Ridley",
      "age": 35,
      "gender": "Female",
      "summary_of_diagnosis": "Hypothyroidism",
      "medication": "Levothyroxine 100mcg - Once a day",
      "tests": "TSH levels"
    },
    {
      "name": "Daisy Ridley",
      "age": 35,
      "gender": "Female",
      "summary_of_diagnosis": "Allergic rhinitis",
      "medication": "Fluticasone nasal spray - Once a day",
      "tests": "No tests required"
    },
    {
      "name": "Daisy Ridley",
      "age": 35,
      "gender": "Female",
      "summary_of_diagnosis": "Osteoarthritis",
      "medication": "Glucosamine sulfate - Once a day",
      "tests": "X-ray of joints"
    },
    {
      "name": "Daisy Ridley",
      "age": 35,
      "gender": "Female",
      "summary_of_diagnosis": "Chronic fatigue syndrome",
      "medication": "Vitamin B12 supplements - Once a day",
      "tests": "Vitamin B12 levels"
    },
    {
      "name": "Daisy Ridley",
      "age": 35,
      "gender": "Female",
      "summary_of_diagnosis": "Hypertension",
      "medication": "Amlodipine 5mg - Once a day",
      "tests": "Blood pressure monitoring"
    }
    
  ]
};

const QuranAppScreen = () => {
  const [showQR, setShowQR] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null); // For holding the random prescription
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation value for background color fade

  // Function to get a random prescription
  const getRandomPrescription = () => {
    const randomIndex = Math.floor(Math.random() * prescriptions.prescriptions.length);
    const randomPrescription = prescriptions.prescriptions[randomIndex];
    setSelectedPrescription(randomPrescription);
  };

  const handleGenerateQR = () => {
    setShowQR(true);
    getRandomPrescription(); // Generate random prescription before showing the QR
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

      {selectedPrescription ? (
        <Text style={styles.subtitle}>
          Name: {selectedPrescription.name}, Age: {selectedPrescription.age}, Diagnosis: {selectedPrescription.summary_of_diagnosis}
        </Text>
      ) : (
        <Text style={styles.subtitle}>No prescription selected</Text>
      )}

      <Animated.View style={[styles.imageContainer, { backgroundColor }]}>
        {showQR && selectedPrescription ? (
          <QRCode
            value={JSON.stringify(selectedPrescription)}
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
