import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import CardList from "../components/CardList";

const ComicsListScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>All Comics</Text>
      <CardList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    padding: 8,
    backgroundColor: "#3d85c6",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    color: "#073763"
  }
});

export default ComicsListScreen;
