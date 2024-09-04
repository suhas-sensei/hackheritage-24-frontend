import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const DoctorList = () => {
  const navigation = useNavigation();

  const doctors = [
    {
      name: "Ram Prasad",
      specialty: "Suffering from Diabetes",
      photo: "https://i.ibb.co/JmBWfDW/image.png",
    },
    {
      name: "Shyam Akalu",
      specialty: "Suffering from Heart Disease",
      photo: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      name: "Sontu Kumar",
      specialty: "Suffering from Hypertension",
      photo: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      name: "Urmila Devi",
      specialty: "Suffering from Asthma",
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
            onPress={() => navigation.navigate("PatientDetails", { doctor })}
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
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 16,
              }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {doctor.name}
              </Text>
              <Text style={{ fontSize: 16, color: "#777" }}>
                {doctor.specialty}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DoctorList;
