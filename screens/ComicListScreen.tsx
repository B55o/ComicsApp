import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardList from "../components/CardList";
import { ComicListScreenStrings } from "../code/strings/ComicListScreen.strings";

const ComicsListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ComicListScreenStrings.title}</Text>
      <CardList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#e4eef7",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    color: "#073763",
  },
});

export default ComicsListScreen;
