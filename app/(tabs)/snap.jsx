import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PatientContext } from '../(patient)/index3'; // Adjust the import path as per your file structure

const SnapScreen = () => {
  const [fetchedName, setFetchedName] = useState(null);
  const selectedPatient = useContext(PatientContext); // Access the selected patient from the context

  const handleFetchName = () => {
    if (selectedPatient) {
      setFetchedName(selectedPatient.name); // Fetch the patient's name
    } else {
      setFetchedName('No patient selected');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Details</Text>

      <TouchableOpacity style={styles.button} onPress={handleFetchName}>
        <Text style={styles.buttonText}>Fetch Patient Name</Text>
      </TouchableOpacity>

      {fetchedName && (
        <Text style={styles.patientName}>
          Selected Patient: {fetchedName}
        </Text>
      )}
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
  button: {
    backgroundColor: '#FF9676', // Orange color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  patientName: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
  },
});

export default SnapScreen;
