import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Icon, Button, Card } from "react-native-elements";

const HomeScreen = () => {
  const handleServicePress = (service: string) => {
    console.log(service + " pressed");
  };

  const handleBottomNavPress = (nav: string) => {
    console.log(`${nav} icon pressed`);
  };

  const doctors = [
    {
      name: "Dr. Prem Tiwari",
      speciality: "Orthopedic",
      imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Dr. Ayesha Singh",
      speciality: "Dermatologist",
      imageUrl: "https://randomuser.me/api/portraits/women/57.jpg",
    },
    {
      name: "Dr. Rahul Verma",
      speciality: "Cardiologist",
      imageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    {
      name: "Dr. Priya Mehta",
      speciality: "Pediatrician",
      imageUrl: "https://randomuser.me/api/portraits/women/37.jpg",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section with Background Image */}
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{ uri: "https://i.ibb.co/dbxJYYM/homepage-Doc.png" }}
          style={styles.headerBackground}
        >
          <View style={styles.headerContent}>
            <Text style={styles.hospitalName}>NRS Hospital</Text>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.adminText}>Admin</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Urgent Care"
              buttonStyle={styles.urgentButton}
              onPress={() => console.log("Urgent Care pressed")}
            />
          </View>
        </ImageBackground>
      </View>

      {/* Services Section */}
      <Text style={styles.sectionTitle}>Our Services</Text>
      <View style={styles.servicesContainer}>
        <ServiceItem
          icon="stethoscope"
          label="Consultation"
          onPress={() => handleServicePress("Consultation")}
        />
        <ServiceItem
          icon="pills"
          label="Medicines"
          onPress={() => handleServicePress("Medicines")}
        />
        <ServiceItem
          icon="ambulance"
          label="Ambulance"
          onPress={() => handleServicePress("Ambulance")}
        />
      </View>

      {/* Appointment Section */}
      <Text style={styles.sectionTitle}>Doctors Onboard Today</Text>
      {doctors.map((doctor, index) => (
        <Card containerStyle={styles.appointmentCard} key={index}>
          <View style={styles.appointmentContent}>
            <ImageBackground
              source={{ uri: doctor.imageUrl }}
              style={styles.appointmentImage}
            />
            <View style={styles.appointmentTextContainer}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const ServiceItem = ({ icon, label, onPress }) => (
  <Pressable style={styles.serviceItem} onPress={onPress}>
    <Icon name={icon} type="font-awesome-5" size={30} color="#3D7FFF" />
    <Text style={styles.serviceLabel}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    width: "100%",
    height: 350, // Adjusted height
    position: "relative",
  },
  headerBackground: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContent: {
    marginTop: 40,
    marginBottom: 60, // Space for the button
  },
  hospitalName: {
    fontSize: 34, // Large size
    fontWeight: "bold",
    color: "#000",
  },
  welcomeText: {
    fontSize: 24, // Medium size
    fontWeight: "700",
    color: "#000",
    marginTop: 35,
  },
  adminText: {
    fontSize: 22, // Smaller size
    color: "#000",
    fontWeight: "400",
    marginBottom: 15,
  },
  buttonContainer: {
    position: "absolute",
    top: 280, // Position button from top
    bottom: 20, // Position button from bottom
    width: "45%",
    alignItems: "center",
  },
  urgentButton: {
    backgroundColor: "#FF6B6B",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 25,
    paddingHorizontal: 20,
    color: "#000",
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
    paddingHorizontal: 15,
  },
  serviceItem: {
    alignItems: "center",
    width: "30%",
  },
  serviceLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  appointmentCard: {
    borderRadius: 25,
    marginHorizontal: 15,
    marginTop: 7,
  },
  appointmentContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  appointmentImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  appointmentTextContainer: {
    marginLeft: 20,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorSpeciality: {
    fontSize: 16,
    color: "#888",
  },
});

export default HomeScreen;
