import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CardProps } from "../code/models/Card.model";

const Card = (card: CardProps) => {
    const imgSrc = {uri: card.img};
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={imgSrc} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.description}>{card.year}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{}}>
      <Image
              source={require("../assets/icons/forwardIcon.png")}
              style={styles.icon}
            />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "left",
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "left",
  },
  button: {
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: "center",
  },
  icon: {
    width: 48,
    height: 48,
  },
});

export default Card;
