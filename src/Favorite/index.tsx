import React, { Fragment, useEffect, useState } from "react";
import { Container, Content } from "./styles";
import Header from "@components/Header";
import MenuTabs from "@components/MenuTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "@components/Card";
import { FlatList, ListRenderItem, Text } from "react-native";
import { CardProps } from "@components/Card/types";
import ModalConfig from "@components/ModalConfig";

const Favorite = () => {
  const [favorites, setFavorites] = useState<CardProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
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
      <Fragment>
        {openModal && <ModalConfig onClose={handleToggleModal} />}
        <Container>
          <Header click={handleToggleModal} />
          <Content>
            <Text>Você ainda não tem favoritos</Text>
          </Content>
          <MenuTabs />
        </Container>
      </Fragment>
    );
  }
  return (
    <Fragment>
      {openModal && <ModalConfig onClose={handleToggleModal} />}
      <Container>
        <Header click={handleToggleModal} />
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
    </Fragment>
  );
};

export default Favorite;
