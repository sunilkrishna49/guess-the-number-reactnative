import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ numberRound, userNumber, onNewStartGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/success.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.innerText}>{numberRound}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.innerText}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onNewStartGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24,
  },
  innerText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
