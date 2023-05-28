import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useComicStore } from "../code/state/Store";
import { transcriptionFormat } from "../code/helpers/transcriptionFormat";
import { dateParser } from "../code/helpers/dateParser";
import { ComicsDetailStrings } from "../code/strings/ComicDetailScreen.string";

const ComicsDetailScreen = () => {
  const { comic } = useComicStore();
  const imgSrc = { uri: comic.img };
  const transcriptionToDisplay: string =
    comic.transcript.length > 0
      ? transcriptionFormat(comic.transcript)
      : comic.alt;
  const dateToDisplay: string = dateParser(comic.day, comic.month, comic.year);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ComicsDetailStrings.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={imgSrc} style={styles.image} />
      </View>
      <Text style={styles.comicTitle}>{comic.title}</Text>
      <Text style={styles.date}>{dateToDisplay}</Text>
      <ScrollView>
        <Text style={styles.description}>{transcriptionToDisplay}</Text>
      </ScrollView>
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
  comicTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    color: "#073763",
  },
  description: {
    fontSize: 20,
    textAlign: "left",
    marginTop: 40,
    fontWeight: "normal",
    marginLeft: 10,
    color: "#073763",
  },
  imageContainer: {
    marginTop: 30,
  },
  image: {
    alignSelf: "center",
    height: 300,
    width: 300,
  },
  date: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#073763",
  },
});

export default ComicsDetailScreen;
