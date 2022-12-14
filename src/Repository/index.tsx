import React, { Fragment, useCallback, useEffect } from "react";
import { Container, Content, ContentLoading, Loading } from "./styles";
import { Animated, Easing, FlatList, ListRenderItem, Text } from "react-native";
import Header from "@components/Header";
import ModalConfig from "@components/ModalConfig";
import MenuTabs from "@components/MenuTabs";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "@components/Card";
import axios from "axios";
import { CardProps } from "@components/Card/types";
import { RequestProps } from "./types";

const Repository = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<RequestProps[]>([]);
  const [listFavorite, setListFavorite] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const AnimatedLoading = Animated.createAnimatedComponent(Loading);
  const spin = new Animated.Value(0);
  const rotate = spin.interpolate({
    inputRange: [0, 9],
    outputRange: ["0deg", "360deg"],
  });

  Animated.loop(
    Animated.timing(spin, {
      toValue: 9,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: true,
    })
  ).start();

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem("@asyncStorage:userName");

    if (jsonValue !== null) {
      setValue(jsonValue);
      return;
    }
  };

  const handleAddfavorite = async (item: RequestProps) => {
    const favoriteClone = [...listFavorite];

    const newItem: CardProps = {
      avatar: item.owner.avatar_url,
      html_url: item.html_url,
      description: item.description,
      full_name: item.full_name,
      language: item.language,
      id: item.id,
      stargazers_count: item.stargazers_count,
    };

    favoriteClone.push(newItem);

    setListFavorite(favoriteClone);
    await AsyncStorage.setItem(
      "@AsyncStorage:favorites",
      JSON.stringify(favoriteClone)
    );
  };

  const renderItem: ListRenderItem<RequestProps> = ({ item }) => {
    return (
      <Card
        full_name={item.full_name}
        description={item.description}
        html_url={item.html_url}
        language={item.language}
        id={item.id}
        stargazers_count={item.stargazers_count}
        key={item.id}
        avatar={item.owner.avatar_url}
        cLick={() => handleAddfavorite(item)}
      />
    );
  };

  useEffect(() => {
    getData();
  }, [getData, loading]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://api.github.com/users/${value}/repos`)
      .then((resp) => {
        if (resp.status === 200) {
          setList(resp.data);
          setLoading(false);
          return;
        }

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [value, setList, setLoading]);

  if (list.length <= 0) {
    return (
      <Fragment>
        {openModal && <ModalConfig onClose={handleToggleModal} />}
        <Container>
          <Header click={handleToggleModal} />
          <Content>
            <Text style={{ textAlign: "center" }}>
              Nenhum usuario encontrado,clique em configura????es e fa??a uma
              busca.
            </Text>
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
        {loading && (
          <ContentLoading>
            <AnimatedLoading style={{ transform: [{ rotate }] }} />
          </ContentLoading>
        )}
        {!loading && (
          <Content>
            <FlatList
              style={{ marginHorizontal: 16, marginBottom: 10 }}
              data={list}
              renderItem={renderItem}
              keyExtractor={(item) => item.full_name}
            />
          </Content>
        )}
        <MenuTabs />
      </Container>
    </Fragment>
  );
};

export default Repository;
