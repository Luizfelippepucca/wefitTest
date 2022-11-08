import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import Header from "@components/Header";
import MenuTabs from "@components/MenuTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "@components/Card";
import { FlatList, ListRenderItem, Text } from "react-native";
import { CardProps } from "@components/Card/types";

const Favorite = () => {
  const [favorites, setFavorites] = useState<CardProps[]>([]);
  const getDataFaviorite = async () => {
    const favoriteJson = await AsyncStorage.getItem("@AsyncStorage:favorites");

    if (favoriteJson !== null) {
      const listFavorit: CardProps[] = JSON.parse(favoriteJson);
      setFavorites(listFavorit);
    }
  };

  const renderItem: ListRenderItem<CardProps> = ({ item }) => {
    return (
      <Card
        full_name={item.full_name}
        description={item.description}
        html_url={item.html_url}
        language={item.language}
        id={item.id}
        stargazers_count={item.stargazers_count}
        key={item.id}
        avatar={item.avatar}
      />
    );
  };

  useEffect(() => {
    getDataFaviorite();
  }, [getDataFaviorite]);

  if (favorites.length <= 0) {
    return (
      <Container>
        <Header click={() => console.log("clicou")} />
        <Content>
          <Text>Você ainda não tem favoritos</Text>
        </Content>
        <MenuTabs />
      </Container>
    );
  }
  return (
    <Container>
      <Header click={() => console.log("clicou")} />
      <Content>
        <FlatList
          style={{ marginHorizontal: 16, marginBottom: 10 }}
          renderItem={renderItem}
          data={favorites}
          keyExtractor={(item) => item.full_name}
        />
      </Content>

      <MenuTabs />
    </Container>
  );
};

export default Favorite;
