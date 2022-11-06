import React, { Fragment } from "react";
import { Container, Content } from "./styles";
import { Text } from "react-native";
import Header from "@components/Header";
import ModalConfig from "@components/ModalConfig";
import MenuTabs from "@components/MenuTabs";
import { useState } from "react";

const Repository = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Fragment>
      {openModal && <ModalConfig onClose={handleToggleModal} />}
      <Container>
        <Header click={handleToggleModal} />
        <Content>
          <Text>ola</Text>
        </Content>
        <MenuTabs />
      </Container>
    </Fragment>
  );
};

export default Repository;
