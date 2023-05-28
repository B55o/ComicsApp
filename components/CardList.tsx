import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { CardProps } from "../code/models/Card.model";
import Card from "./Card";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = () => {
    setIsLoading(true);
    const initialPage: number = page;
    const loadPageCount: number = 10;
    const endPage: number = initialPage + loadPageCount;
    const promises = [];

    for (let i = initialPage; i < endPage; i++) {
      promises.push(
        fetch(`https://xkcd.com/${i}/info.0.json`)
          .then((response) => response.json())
          .then((data) => data)
          .catch((error) => {
            console.error(error);
          })
      );
    }

    Promise.all(promises)
      .then((data) => {
        setCards((prevCards) => [...prevCards, ...data]);
        setIsLoading(false);
        setPage(endPage);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const renderCard = ({ item }: { item: CardProps }) => <Card {...item} />;
  const keyExtractor = (item: CardProps, index: number) => index.toString();

  const handleLoadMore = () => {
    if (!isLoading) {
      loadCards();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cards}
        renderItem={renderCard}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#000000"/>
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
  },
  list: {
    borderRadius: 8
  }
});

export default CardList;
