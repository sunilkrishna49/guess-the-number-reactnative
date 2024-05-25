import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.innerText, style]}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  innerText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.accent500,
  },
});
