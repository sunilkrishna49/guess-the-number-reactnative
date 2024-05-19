import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const GameOverScreen = ({ route, navigation }) => {
  const { myNumber } = route.params;
  return (
    <View style={styles.container}>
      <Text>Game Over</Text>
      {/* <View>
        <Button title="Start Game" onPress={navigation.navigate("GameStart")} />
      </View> */}
      <View>
        <Text>Your phone needed {myNumber} rounds to guess the number 55</Text>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
