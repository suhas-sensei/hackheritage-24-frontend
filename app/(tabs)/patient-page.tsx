// app/index.tsx
import React from "react";
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

// Placeholder image
const placeholderImage = "https://randomuser.me/api/portraits/men/87.jpg"; // Placeholder URL

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ProfileSection />
      <FoldersSection />
      <SchemesAvailedSection />
    </ScrollView>
  );
};

// Profile Section Component
const ProfileSection = () => (
  <View style={styles.profileSection}>
    <Image source={{ uri: placeholderImage }} style={styles.profileImage} />
    <Text style={styles.profileName}>Shankar Shaw</Text>
    <Text style={styles.profileDetails}>Aadhar No: XXXX-XXXX-XXXX</Text>
    <View style={styles.profileStats}>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>30</Text>
        <Text style={styles.statName}>Age</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>General</Text>
        <Text style={styles.statName}>Caste</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statNumber}>5</Text>
        <Text style={styles.statName}>Schemes</Text>
      </View>
    </View>
  </View>
);

// Folders Section Component
const FoldersSection = () => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Folders</Text>
      <TouchableOpacity>
        <Text style={styles.viewAll}>View All</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.folders}>
      <FolderItem
        title="Health Records"
        onPress={() => handleFolderPress("Health Records")}
      />
      <FolderItem
        title="Prescriptions"
        onPress={() => handleFolderPress("Prescriptions")}
      />
      <FolderItem
        title="Doctor Notes"
        onPress={() => handleFolderPress("Doctor Notes")}
      />
    </View>
  </View>
);

// Folder Item Component
const FolderItem = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.folderItem} onPress={onPress}>
    <Text style={styles.folderIcon}>📁</Text>
    <Text style={styles.folderText}>{title}</Text>
  </TouchableOpacity>
);

// Schemes Availed Section Component
const SchemesAvailedSection = () => {
  const schemes = [
    { id: "1", title: "Ayushman Bharat", status: "Active" },
    { id: "2", title: "PMJAY", status: "Completed" },
    { id: "3", title: "State Health Card", status: "In Progress" },
    {
      id: "4",
      title: "Central Govt. Healthcare Scheme",
      status: "In Progress",
    },
    // Add more schemes as needed
  ];

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Schemes Availed</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.schemesContainer}>
        <FlatList
          data={schemes}
          renderItem={({ item }) => (
            <SchemeItem
              title={item.title}
              status={item.status}
              onPress={() => handleSchemePress(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.schemesList}
        />
      </View>
    </View>
  );
};

// Scheme Item Component
const SchemeItem = ({
  title,
  status,
  onPress,
}: {
  title: string;
  status: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.schemeItem} onPress={onPress}>
    <Text style={styles.schemeIcon}>📄</Text>
    <View>
      <Text style={styles.schemeTitle}>{title}</Text>
      <Text style={styles.schemeStatus}>{status}</Text>
    </View>
  </TouchableOpacity>
);

// Dummy handlers
const handleFolderPress = (title: string) => {
  console.log(`Folder pressed: ${title}`);
};

const handleSchemePress = (title: string) => {
  console.log(`Scheme pressed: ${title}`);
};

// Integrated styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF2F6",
    paddingTop: 40,
  },
  profileSection: {
    backgroundColor: "#0B4F99",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 13,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  profileDetails: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 13,
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },
  statItem: {
    alignItems: "center",
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 1,
    width: "30%",
  },
  statNumber: {
    fontSize: 11,
    color: "#fff",
    alignItems: "center",
  },
  statName: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#DFF2F6",
  },
  section: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  viewAll: {
    fontSize: 14,
    color: "#4a90e2",
  },
  folders: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  folderItem: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 2 },
  },
  folderIcon: {
    fontSize: 24,
    color: "#4a90e2",
  },
  folderText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
    color: "#333",
  },
  schemesContainer: {
    height: 200, // Adjust height as needed
  },
  schemesList: {
    paddingHorizontal: 10,
  },
  schemeItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
  },
  schemeIcon: {
    fontSize: 24,
    marginRight: 10,
    color: "#4a90e2",
  },
  schemeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  schemeStatus: {
    fontSize: 14,
    color: "#666",
  },
});

export default Index;
