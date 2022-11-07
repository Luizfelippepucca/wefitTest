import React, { Fragment, useEffect } from "react";
import { Container, Content } from "./styles";
import { FlatList, ListRenderItem, Text } from "react-native";
import Header from "@components/Header";
import ModalConfig from "@components/ModalConfig";
import MenuTabs from "@components/MenuTabs";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card, { CardProps } from "@components/Card";
import axios from "axios";

const Repository = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<CardProps[]>([]);

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
  }, [getData]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${value}/repos`)
      .then((resp) => {
        if (resp.status === 200) {
          setList(resp.data);
          return;
        }
      })
      .catch((err) => console.log(err));
  }, [value]);

  if (list.length <= 0) {
    return (
      <Container>
        <Header click={handleToggleModal} />
        <Content>
          <Text style={{ textAlign: "center" }}>
            Nenhum usuario encontrado,faça uma busca
          </Text>
        </Content>
        <MenuTabs />
      </Container>
    );
  }

  return (
    <Fragment>
      {openModal && <ModalConfig onClose={handleToggleModal} />}
      <Container>
        <Header click={handleToggleModal} />
        <Content>
          <FlatList
            style={{ marginHorizontal: 16 }}
            data={list}
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
