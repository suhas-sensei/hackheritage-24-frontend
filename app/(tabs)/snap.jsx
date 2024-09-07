import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SnapScreen = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      // Get the QR-generated patient data from AsyncStorage
      const storedPatientData = await AsyncStorage.getItem('qrPatientData');

      if (!storedPatientData) {
        throw new Error('No QR data found');
      }

      // Parse the stored patient data (since it was stored as a string)
      const parsedPatientData = JSON.parse(storedPatientData);

      // Update state with the fetched data
      setPatientData(parsedPatientData);
    } catch (error) {
      console.error('Error fetching patient data from QR:', error);
      setPatientData(null); // Reset patient data if there was an error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6B42A4" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {patientData ? (
        <>
          <Text style={styles.nameText}>Patient Name: {patientData.name}</Text>
          <Text style={styles.infoText}>Age: {patientData.age}</Text>
          <Text style={styles.infoText}>Gender: {patientData.gender}</Text>
          <Text style={styles.infoText}>Diagnosis Summary: {patientData.summary_of_diagnosis}</Text>
          <Text style={styles.infoText}>Medication: {patientData.medication}</Text>
          <Text style={styles.infoText}>Tests: {patientData.tests}</Text>
        </>
      ) : (
        <Text style={styles.errorText}>No data available. Please generate the QR code first.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleFetchData}>
        <Text style={styles.buttonText}>Get Data from QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF9676',
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

export default SnapScreen;
