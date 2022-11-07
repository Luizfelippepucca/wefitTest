import React, { Fragment, useCallback, useEffect } from "react";
import { Container, Content } from "./styles";
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  TouchableOpacity,
} from "react-native";
import Header from "@components/Header";
import ModalConfig from "@components/ModalConfig";
import MenuTabs from "@components/MenuTabs";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card, { CardProps } from "@components/Card";

const Data: CardProps[] = [
  {
    full_name: "Luiz Pucca",
    description: "alguma descrição",
    stargazers_count: "10",
    language: "Typescript",
    html_url: "https://github.com/appswefit",
    id: "1",
  },
  {
    full_name: "Luiz Pucca2",
    description: "alguma descrição",
    stargazers_count: "10",
    language: "Typescript",
    html_url: "https://github.com/appswefit",
    id: "2",
  },
];

const Repository = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@asyncStorage:userName");
      if (jsonValue !== null) {
        setValue(jsonValue);
        return;
      }
    } catch (e) {
      // error reading value
      console.log(e);
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
      />
    );
  };

  useEffect(() => {
    getData();
  }, [getData, value]);
  return (
    <Fragment>
      {openModal && <ModalConfig onClose={handleToggleModal} />}
      <Container>
        <Header click={handleToggleModal} />
        <Content>
          <FlatList
            style={{ marginHorizontal: 16 }}
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Content>
        <MenuTabs />
      </Container>
    </Fragment>
  );
};

export default Repository;
