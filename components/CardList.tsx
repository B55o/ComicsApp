import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Card from "./Card";
import { ComicGeneral } from "../code/models/comicGeneral.model";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<ComicGeneral[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [latestComic, setLatestComic] = useState<number>(1);

  useEffect(() => {
    fetchLatestComic();
  }, []);
  // TODO: analyze flow of the loop rendering cards, last comic is fetched and now loop elements need to decrese insteand of increase
  const fetchLatestComic = async () => {
    try {
      const response = await fetch("https://xkcd.com/info.0.json");
      const data: ComicGeneral = await response.json();
      setLatestComic(data.num);
    } catch (error) {
      console.error(error);
    }
  };

  const [page, setPage] = useState<number>(latestComic);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    setIsLoading(true);
    const initialPage: number = page;
    const loadPageCount: number = 10;
    const endPage: number = initialPage + loadPageCount;
    const promises = [];

    for (let i = initialPage; i < endPage; i++) {
      try {
        const response = await fetch(`https://xkcd.com/${i}/info.0.json`);
        const data: ComicGeneral = await response.json();
        promises.push(data);
      } catch (error) {
        console.error(error);
      }
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

  const renderCard = ({ item }: { item: ComicGeneral }) => <Card {...item} />;
  const keyExtractor = (item: ComicGeneral, index: number) => index.toString();

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
          isLoading ? <ActivityIndicator size="large" color="#000000" /> : null
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
    borderRadius: 8,
  },
});

export default CardList;
