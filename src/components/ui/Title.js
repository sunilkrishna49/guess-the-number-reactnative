import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,

    color: "white",
    borderWidth: 2,
    padding: 12,
    borderColor: "white",
    textAlign: "center",
    marginTop: 10,
  },
});
