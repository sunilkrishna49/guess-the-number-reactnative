import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const GameStartScreen = ({ onPickNumberHandler }) => {
  const [enteredNumber, SetEnteredNumber] = useState("");

  const inputHandler = (enteredText) => {
    SetEnteredNumber(enteredText);
  };

  const confirmButtonHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Please Choose a Number Between 1 and 99",
        [{ onPress: resetButtonHandler }]
      );
      return;
    }
    onPickNumberHandler(choosenNumber);
  };

  const resetButtonHandler = () => {
    SetEnteredNumber("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess the Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={inputHandler}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetButtonHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmButtonHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    width: 50,
    color: Colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    fontSize: 32,
    marginVertical: 8,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
