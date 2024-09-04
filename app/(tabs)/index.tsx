import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const DoctorList = () => {
  const doctors = [
    { name: "John Wilson", specialty: "Cardiologist" },
    { name: "Alexa Johnson", specialty: "Heart Surgeon" },
    { name: "Tim Smith", specialty: "Microbiologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
    { name: "Wade Warren", specialty: "Hematologist" },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
        Popular Doctors
      </Text>
      {doctors.map((doctor, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}
        >
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16 }}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {doctor.name}
            </Text>
            <Text style={{ fontSize: 16, color: "#777" }}>
              {doctor.specialty}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default DoctorList;
