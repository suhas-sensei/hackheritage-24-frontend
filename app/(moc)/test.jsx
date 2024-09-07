import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Input } from 'react-native-elements';

const WireframePage = () => {
  return (
    <View style={styles.frameContainer}>
      <View style={styles.innerContainer}>
        {/* Heading */}
        <Text style={styles.heading}>Patient Details:</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header section with placeholder for "Name" */}
          <View style={styles.headerBox}>
            <Input
              placeholder="Name"
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputLeft} // Align to the left
            />
          </View>

          {/* Section 1 with Date and Gender side by side in separate boxes */}
          <View style={styles.row}>
            <View style={styles.headerBoxHalf}>
              <Input
                placeholder="Date"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputLeft} // Align to the left
              />
            </View>
            <View style={styles.headerBoxHalf}>
              <Input
                placeholder="Gender"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputLeft} // Align to the left
              />
            </View>
          </View>

          {/* Section 2 with placeholder for "Summary" */}
          <View style={styles.cardBox}>
            <Input
              placeholder="Summary"
              multiline
              numberOfLines={3}
              inputContainerStyle={styles.cardInputContainer}
              inputStyle={styles.cardInputText}
            />
          </View>

          {/* Section 3 with placeholder for "Medicines" */}
          <View style={styles.cardBox}>
            <Input
              placeholder="Medicines"
              multiline
              numberOfLines={3}
              inputContainerStyle={styles.cardInputContainer}
              inputStyle={styles.cardInputText}
            />
          </View>

          {/* Footer section with placeholder for "Tests" */}
          <View style={styles.footerBox}>
            <Input
              placeholder="Tests"
              inputContainerStyle={styles.inputContainer}
              inputStyle={styles.inputLeft} // Align to the left
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameContainer: {
    flex: 1,
    backgroundColor: '#D4C2F1', // Light purple/blue background (outer frame)
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '', // White background (inner content)
    borderRadius: 30, // For rounded edges
    flex: 1,
    width: '100%',
    padding: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10, // Reduced spacing between heading and rest of the content
    color: '#333', // Optional: Customize the color of the heading
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd', // Light grey border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // For Android shadow
    marginBottom: 20,
  },
  headerBoxHalf: {
    flex: 1, // Each box takes half of the available space
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: 5, // Add space between the two boxes
  },
  inputContainer: {
    borderBottomWidth: 0, // Remove underline from input
  },
  inputLeft: {
    fontSize: 18,
    textAlign: 'left', // Align text to the left
  },
  cardBox: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardInputContainer: {
    borderBottomWidth: 0,
  },
  cardInputText: {
    fontSize: 16,
    textAlignVertical: 'top', // Aligns text to the top of the input
  },
  footerBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginTop: 20,
  },
});

export default WireframePage;