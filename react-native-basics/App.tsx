import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from "react";
import { Customer } from "./model/Customer";

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);

  const handleSubmit = () => {

    const newCustomer = new Customer(name, email, mobile);
    setCustomers([...customers, newCustomer]);

    setName('');
    setEmail('');
    setMobile('');
  };

  return (
      <View style={styles.container} className={`flex-1 items-center justify-center bg-white p-5`}>
        <Text style={styles.heading}>Enter Customer Details</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
           style={styles.input}
            placeholder="Enter your mobile"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
        />

        <TouchableOpacity
            style={{
              backgroundColor: 'green',
              alignItems: 'center',
              paddingVertical: 12,
              paddingHorizontal: 10,
              marginBottom: 10,
              borderRadius: 8,
              elevation: 3,
            }}
            onPress={handleSubmit}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
            Save Customer
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Customer List</Text>

        <FlatList
            className={`mt-4 w-80`}
            data={customers}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
                <View className={`w-80 p-3 my-2 border border-gray-200 rounded-lg bg-gray-100`}>
                  <Text className={`text-lg font-bold`}>{item.name}</Text>
                  <Text className={`text-sm`}>{item.email}</Text>
                  <Text className={`text-sm`}>{item.mobile}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  heading: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    margin:10,
    fontSize:14,
  },
})