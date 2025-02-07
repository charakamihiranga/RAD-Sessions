import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from "react";
import './global.css';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
      <View style={styles.container}>
        <Text style={styles.countText}>Count is: {count} </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={() => setCount(count + 1)} title="Increment" color="#4CAF50" />
          </View>
          <View style={styles.button}>
            <Button onPress={() => setCount(count - 1)} title="Decrement" color="#F44336" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});

