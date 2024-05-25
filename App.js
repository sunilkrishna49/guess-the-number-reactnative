import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./src/screens/GameStartScreen";
import OpponentScreen from "./src/screens/OpponentScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import Colors from "./src/constants/colors";
import GameOverScreen from "./src/screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  const pickNumberHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
    setGameOver(false);
  };
  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const newGameStartHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <GameStartScreen onPickNumberHandler={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <OpponentScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        numberRound={guessRounds}
        onNewStartGame={newGameStartHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
