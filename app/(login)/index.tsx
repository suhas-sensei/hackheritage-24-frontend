import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, useRouter, Stack } from 'expo-router'; // Import Stack for customizing screen options
import patientData from '../(patient)/data/pdata.json';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginType, setLoginType] = useState(''); // State to track the login type
  const [username, setUsername] = useState(''); // State for username input
  const [password, setPassword] = useState(''); // State for password input (assuming)
  const router = useRouter(); // Initialize the router for navigation

  const handleLoginType = (type) => {
    setLoginType(type);
    setModalVisible(true);
  };

  const handleSignIn = () => {
    if (loginType === 'Patient') {
      // Check if the username exists in the pdata.json file for patient login
      const userExists = patientData.prescriptions.some(
        (patient) => patient.name.toLowerCase() === username.toLowerCase()
      );
      if (userExists) {
        router.push('../(patient)/index3'); // Redirect to patient page if the username exists
      } else {
        Alert.alert('Error', 'Username not found in the patient records');
      }
    } else if (loginType === 'Doctor') {
      router.push('../(moc)/index2'); // Redirect to doctor page on sign-in
    }

    setModalVisible(false); // Close modal after signing in
  };

  const getPlaceholderForID = () => {
    switch (loginType) {
      case 'Patient':
        return 'Aadhar Number';
      case 'Doctor':
        return 'License Number';
      default:
        return 'ID';
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* Disable the header */}
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={{
            uri: "https://i.ibb.co/8zhYbVy/Whats-App-Image-2024-09-07-at-04-26-02-b62f16f3.jpg",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Use credentials to access your account</Text>

        <TouchableOpacity style={styles.button} onPress={() => handleLoginType('Patient')}>
          <Icon name="user" size={20} color="#FFFFFF" style={styles.icon} />
          <Text style={styles.buttonText}>Login as Patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleLoginType('Doctor')}>
          <Icon name="stethoscope" size={20} color="#FFFFFF" style={styles.icon} />
          <Text style={styles.buttonText}>Login as Doctor</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View style={styles.modalTabs}>
                <TouchableOpacity onPress={() => setIsSignUp(false)}>
                  <Text style={!isSignUp ? styles.activeTab : styles.inactiveTab}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsSignUp(true)}>
                  <Text style={isSignUp ? styles.activeTab : styles.inactiveTab}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#7E7E7E" />
                <TextInput
                  style={styles.input}
                  placeholder={isSignUp ? 'Email' : 'Username or email'}
                  placeholderTextColor="#7E7E7E"
                  value={username}
                  onChangeText={setUsername} // Track username input
                />
              </View>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#7E7E7E" />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#7E7E7E"
                  value={password}
                  onChangeText={setPassword} // Track password input
                />
              </View>
              {isSignUp && (
                <View style={styles.inputContainer}>
                  <Icon name="id-card" size={20} color="#7E7E7E" />
                  <TextInput
                    style={styles.input}
                    placeholder={getPlaceholderForID()}
                    placeholderTextColor="#7E7E7E"
                  />
                </View>
              )}
              <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
              </TouchableOpacity>

              {/* New Text for Doctor login */}
              {loginType === 'Doctor' && !isSignUp && (
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text style={styles.switchLoginText}>
                    Not a Doctor?
                    <Link href="/login" asChild>
                      <Text style={styles.linkText}> Sign In as an Authority</Text>
                    </Link>
                  </Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By creating this account you agree to our{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0EEF0', // Off-white background
    paddingHorizontal: 20,
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7E7E7E',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#125491',
    flexDirection: 'row', // Align icon and text in a row
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Add space between icon and text
  },
  icon: {
    marginRight: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },
  modalTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#7E7E7E',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#000000',
  },
  signInButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#FF0000',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    width: '80%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#7E7E7E',
    textAlign: 'center',
  },
  link: {
    color: '#125491',
    fontWeight: 'bold',
  },
  switchLoginText: {
    color: '#7E7E7E',
    marginTop: 15,
    fontSize: 14,
    textAlign: 'center',
  },
  linkText: {
    color: '#125491',
    fontWeight: 'bold',
  },
});