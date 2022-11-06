import React, { Fragment } from "react";
import { Container, Content } from "./styles";
import { Text } from "react-native";
import Header from "@components/Header";
import ModalConfig from "@components/ModalConfig";
import MenuTabs from "@components/MenuTabs";

const Repository = () => {
  return (
    <Fragment>
      {/* <ModalConfig /> */}
      <Container>
        <Header />
        <Content>
          <Text>ola</Text>
        </Content>
        <MenuTabs />
      </Container>
    </Fragment>
  );
};

export default Repository;
