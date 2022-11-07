import React, { Fragment, useCallback, useEffect } from "react";
import { Container, Content } from "./styles";
import { Text } from "react-native";
import Header from "@components/Header";
import ModalConfig from "@components/ModalConfig";
import MenuTabs from "@components/MenuTabs";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "@components/Card";

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

  useEffect(() => {
    getData();
    console.log(value);
  }, [getData, value]);
  return (
    <Fragment>
      {openModal && <ModalConfig onClose={handleToggleModal} />}
      <Container>
        <Header click={handleToggleModal} />
        <Content>
          <Card />
        </Content>
        <MenuTabs />
      </Container>
    </Fragment>
  );
};

export default Repository;
