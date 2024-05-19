import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

const OpponentScreen = ({ route, navigation }) => {
  const { myNumber } = route.params;
  const [opponentGuess, setOpponentGuess] = useState(0);
  const [refreshkey, setRefreshkey] = useState(0);
  const [guessList, setGuessList] = useState([]);

  const opponentNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    setOpponentGuess(randomNumber);
    setGuessList((previousList) => [randomNumber, ...previousList]);
  };

  useEffect(() => {
    opponentNumber();
  }, [refreshkey]);

  const gameOver = () => {
    navigation.navigate("GameStart");
  };

  const lowerOnClick = () => {
    if (opponentGuess > 0 && opponentGuess < myNumber) {
      setRefreshkey(refreshkey + 1);
    } else {
      Alert.alert("Don't lie! You Know that this wrong...");
    }
  };
  const higherOnClick = () => {
    if (opponentGuess > 0 && opponentGuess > myNumber) {
      setRefreshkey(refreshkey + 1);
    } else {
      Alert.alert("Dont lie! You Know that this wrong...");
    }
  };

  console.log(opponentGuess, myNumber);

  if (opponentGuess == myNumber) {
    navigation.navigate("GameOver", { myNumber });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Opponent's Guess</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{opponentGuess}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Higher or Lower?</Text>
        <View></View>

        <View style={styles.buttons}>
          <View style={styles.button1}>
            <Button title="-" onPress={lowerOnClick} />
          </View>
          <View style={styles.button2}>
            <Button title="+" onPress={higherOnClick} />
          </View>
        </View>
      </View>
      <FlatList
        data={guessList}
        renderItem={({ item, index }) => (
          <View style={styles.guessList}>
            <View>
              <Text>#{guessList.length - index}</Text>
            </View>
            <View>
              <Text>Opponent's Guess: {item}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OpponentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
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
    width: 80,
    marginRight: 16,
  },
  button2: {
    width: 80,
  },
  guessList: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
  },
});
