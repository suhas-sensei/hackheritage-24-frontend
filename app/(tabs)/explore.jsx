import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/Ionicons";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState("");

  const list1 = [
    {
      id: "1",
      name: "Kendra Stevens",
      issue: "I need to check my headache",
      date: "26 March 8:30 PM",
    },
    {
      id: "2",
      name: "Kristopher Flores",
      issue: "I am experiencing knee pain",
      date: "28 March 8:30 PM",
    },
    {
      id: "3",
      name: "Jacqueline Greene",
      issue: "I need a dental check-up",
      date: "30 March 10:00 PM",
    },
    {
      id: "4",
      name: "Marcus Aurelius",
      issue: "Dislocated Shoulder",
      date: "30 March 10:00 PM",
    },
  ];

  const list2 = [
    { id: "1", name: "John Doe", issue: "Back pain", date: "26 March 9:00 AM" },
    {
      id: "2",
      name: "Jane Smith",
      issue: "Migraine",
      date: "28 March 11:00 AM",
    },
  ];

  const list3 = [
    {
      id: "1",
      name: "Alice Johnson",
      issue: "Sore throat",
      date: "26 March 1:00 PM",
    },
    {
      id: "2",
      name: "Bob Brown",
      issue: "Flu symptoms",
      date: "28 March 2:00 PM",
    },
    {
      id: "3",
      name: "Charlie Davis",
      issue: "High fever",
      date: "30 March 3:00 PM",
    },
  ];

  const getPatientList = () => {
    const date = new Date(selectedDate).getDate();
    if (date % 3 === 1) return list1;
    if (date % 3 === 2) return list2;
    if (date % 3 === 0) return list3;
    return list1; // Default to list1 if no date is selected
  };

  const renderPatient = ({ item }) => (
    <TouchableOpacity style={styles.patientCard}>
      <Icon name="person-circle-outline" size={40} color="#000" />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{item.name}</Text>
        <Text style={styles.patientIssue}>{item.issue}</Text>
        <Text style={styles.patientDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Schedule</Text>
        <TouchableOpacity style={styles.userIconContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/552/552721.png",
            }} // Direct image link
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#3b82f6" },
        }}
        theme={{
          arrowColor: "#3b82f6",
          todayTextColor: "#3b82f6",
        }}
      />
      <Text style={styles.sectionTitle}>Waiting Patient</Text>
      <FlatList
        data={getPatientList()}
        renderItem={renderPatient}
        keyExtractor={(item) => item.id}
        style={styles.patientList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#FCFAED",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 25,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a202c",
  },
  userIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  userIcon: {
    width: "100%",
    height: "100%",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    color: "#1a202c",
    marginTop: 50,
  },
  patientList: {
    marginTop: 16,
  },
  patientCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  patientInfo: {
    marginLeft: 12,
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a202c",
  },
  patientIssue: {
    fontSize: 14,
    color: "#718096",
  },
  patientDate: {
    fontSize: 12,
    color: "#a0aec0",
  },
});
