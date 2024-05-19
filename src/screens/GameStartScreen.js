import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const GameStartScreen = ({ navigation }) => {
  const [myNumber, setMyNumber] = useState(0);

  const resetNumber = () => {
    setMyNumber("");
  };
  const onConfirmClick = () => {
    const num = parseInt(myNumber, 10);
    if (num > 0 && num < 100) {
      navigation.navigate("Opponent", { myNumber: num });
      resetNumber();
    } else {
      Alert.alert("Invalid Number! Please enter a number between 1 and 99");
      resetNumber();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Guess My Number</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Enter a Number</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="_____"
            value={myNumber}
            onChangeText={(value) => setMyNumber(value)}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.buttons}>
          <View style={styles.button1}>
            <Button title="Reset" onPress={resetNumber} />
          </View>
          <View>
            <Button title="Confirm" onPress={onConfirmClick} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    borderWidth: 2,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    padding: 10,
    fontSize: 24,
  },
  body: {
    borderWidth: 2,
    alignItems: "center",
    width: "100%",
    padding: 16,
  },
  bodyText: {
    padding: 10,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    width: 100,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    margin: 15,
  },
  button1: {
    marginRight: 16,
    width: 80,
  },
});
