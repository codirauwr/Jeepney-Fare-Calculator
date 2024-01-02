import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View, Picker, Image } from 'react-native';

const KilometersInput = () => {
  const [number, onChangeNumber] = useState('');
  const [discountType, setDiscountType] = useState('regular');
  const [peopleCount, setPeopleCount] = useState('');
  const [fareResult, setFareResult] = useState(null);

  const calculateFare = () => {
    let baseRate = 12.00;
    let additionalRate = 1.80;

    if (discountType === 'student') {
      baseRate = 9.60;
      additionalRate = 1.44;
    }

    const distance = parseFloat(number);
    let fare = baseRate;

    if (distance > 4) {
      fare += (distance - 4) * additionalRate;
    }

    const totalFare = fare * parseInt(peopleCount);

    setFareResult(totalFare.toFixed(2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
      <Image style={styles.logo} source={require('../assets/jeep_logo.png')} />

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Number of Kilometers</Text>
            <TextInput
              style={styles.input}
              value={number}
              keyboardType="numeric"
              onChangeText={(text) => onChangeNumber(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Discount Type</Text>
            <Picker
              selectedValue={discountType}
              onValueChange={(itemValue) => setDiscountType(itemValue)}
              style={styles.dropdown}
            >
              <Picker.Item label="Regular" value="regular" />
              <Picker.Item label="Student/Elderly/PWD" value="student" />
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Number of Persons</Text>
            <TextInput
              style={styles.input}
              value={peopleCount}
              keyboardType="numeric"
              onChangeText={(text) => setPeopleCount(text)}
            />
          </View>

          <Button
            title="Calculate Fare"
            onPress={calculateFare}
            color="#EE9322" // Brown color
          />

          {fareResult !== null && (
            <Text style={styles.result}>Total Fare: PHP {fareResult}</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#219C90', // Tan color (brownish)
    justifyContent: 'center',
    padding: 100,
  },
  logo: {
    width: 220,
    height: 220,
    marginTop: 0,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    borderRadius: 10,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2D3250', // Brown color
  },
  input: {
    height: 40,
    paddingHorizontal: 8,
    borderColor: '#89B9AD', // Brown color
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdown: {
    height: 40,
    width: '100%',
    borderColor: '#89B9AD', // Brown color
    borderWidth: 1,
    borderRadius: 5,
    fontSize:12,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#2D3250', // Brown color
  },
});

export default KilometersInput;
