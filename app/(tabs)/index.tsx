import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const DoctorList = () => {
  const doctors = [
    {
      name: "Ram Prasad",
      specialty: "Suffering from Lung Cancer",
      photo: require("./assets/patient1.png")
    },
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
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      {/* Navigation Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#f2f2f2",
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 24, color: "#777" }}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>
          patients
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 24, color: "#777" }}>{"▼"}</Text>
        </TouchableOpacity>
      </View>

      {/* Doctor List */}
      <ScrollView style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          Pending Cases
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
              source={{
                uri: doctor.photo
                  ? doctor.photo
                  : "https://via.placeholder.com/50",
              }}
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
    </View>
  );
};

export default DoctorList;
