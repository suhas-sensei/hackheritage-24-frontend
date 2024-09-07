import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DoctorList = () => {
  const doctors = [
    {
      name: "Alice Smith",
      specialty: "Suffering from Urinary Tract Infection",
      photo: "https://randomuser.me/api/portraits/women/29.jpg",
      id: 1,
    },
    {
      name: "Bob Johnson",
      specialty: "Suffering from Type 2 Diabetes",
      photo: "https://randomuser.me/api/portraits/men/30.jpg",
      id: 2,
    },
    {
      name: "Charlie Brown",
      specialty: "Suffering from GERD",
      photo: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      name: "Daisy Ridley",
      specialty: "Suffering from Hypertension",
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Sita Ram",
      specialty: "Suffering from Arthritis",
      photo: "https://randomuser.me/api/portraits/lego/6.jpg",
    },
    {
      name: "Umesh Kumar",
      specialty: "Suffering from Chronic Kidney Disease",
      photo: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
      name: "Narayan Prasad",
      specialty: "Suffering from Depression",
      photo: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "Nita Kumari",
      specialty: "Suffering from Migraine",
      photo: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
      name: "Ram Prasad",
      specialty: "Suffering from Liver Cirrhosis",
      photo: "https://i.ibb.co/JmBWfDW/image.png",
    },
    {
      name: "Ram Prasad",
      specialty: "Suffering from Alzheimer's Disease",
      photo: "https://i.ibb.co/JmBWfDW/image.png",
    },
    {
      name: "Ram Prasad",
      specialty: "Suffering from Osteoporosis",
      photo: "https://i.ibb.co/JmBWfDW/image.png",
    },
  ];

  const handleRedirect = (doctorId) => {
    // Simulating navigation to a patient page using Linking
    const url = `patient-page?id=${doctorId}`;
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  const [status, setStatus] = useState(
    Array(doctors.length).fill(null) // Initially, all doctors have no status (accepted/declined)
  );

  const handleAccept = (index) => {
    const newStatus = [...status];
    newStatus[index] = "accepted";
    setStatus(newStatus);
  };

  const handleDecline = (index) => {
    const newStatus = [...status];
    newStatus[index] = "declined";
    setStatus(newStatus);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      {/* Navigation Bar */}
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 30,
            backgroundColor: "#f2f2f2",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="arrow-left"
              size={22}
              color="#777"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>
            Patients
          </Text>
          <TouchableOpacity>
            <Icon
              name="ellipsis-v"
              size={26}
              color="#777"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Doctor List */}
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          Pending Cases
        </Text>
        {doctors.map((doctor, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleRedirect(doctor.id)} // Redirect when the card is pressed
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 16,
              marginBottom: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: doctor.photo
                    ? doctor.photo
                    : "https://via.placeholder.com/50",
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginRight: 16,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {doctor.name}
                </Text>
                <Text style={{ fontSize: 16, color: "#777" }}>
                  {doctor.specialty}
                </Text>
              </View>
            </View>

            {/* Conditionally render Accept and Decline buttons */}
            {status[index] === null && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#28a745",
                    padding: 10,
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                  onPress={() => handleAccept(index)}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Accept
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#dc3545",
                    padding: 10,
                    borderRadius: 5,
                  }}
                  onPress={() => handleDecline(index)}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Decline
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Show Tick or Cross */}
            {status[index] === "accepted" && (
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Icon name="check" size={20} color="green" />
                <Text style={{ marginLeft: 10, color: "green" }}>Accepted</Text>
              </View>
            )}
            {status[index] === "declined" && (
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Icon name="times" size={20} color="red" />
                <Text style={{ marginLeft: 10, color: "red" }}>Declined</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DoctorList;
