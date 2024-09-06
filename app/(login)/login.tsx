import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginType, setLoginType] = useState(''); // State to track the login type

  const handleLoginType = (type) => {
    setLoginType(type);
    setModalVisible(true);
  };

  const getPlaceholderForID = () => {
    switch (loginType) {
      case 'Hospital':
        return 'License Number';
      case 'SuperAdmin':
        return 'Govt. ID';
      default:
        return 'ID';
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={{ uri: "https://i.ibb.co/8zhYbVy/Whats-App-Image-2024-09-07-at-04-26-02-b62f16f3.jpg" }} style={styles.logo} />
      
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Use credentials to access your account</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => handleLoginType('Hospital')}>
        <Icon name="hospital-o" size={20} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.buttonText}>Login as Hospital</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handleLoginType('SuperAdmin')}>
        <Icon name="university" size={20} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.buttonText}>Login as SuperAdmin</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By creating this account you agree to our <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
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
                placeholder={isSignUp ? "Email" : "Username or email"}
                placeholderTextColor="#7E7E7E"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#7E7E7E" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#7E7E7E"
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
            <TouchableOpacity style={styles.signInButton}>
              <Text style={styles.signInButtonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2D9FF',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120, // Adjust the size of the logo
    height: 120,
    marginBottom: 20, // Adds spacing between the logo and the title
    borderRadius: 60, // Makes the logo round, adjust as needed
  },
  title: {
    fontSize: 32,
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
    backgroundColor: '#0046B8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 32,
    marginTop: 10,
    width: '70%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#7E7E7E',
    marginTop: 30,
    textAlign: 'center',
    bottom: -60,
  },
  link: {
    color: '#000000',
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    color: '#000000',
  },
});
