import React from "react";
import { Container, Content, Header, Title } from "./styles";
import { Text, Image, TouchableOpacity } from "react-native";

const Repository = () => {
  return (
    <Container>
      <Header>
        <Title font="Roboto_500Medium">WeFit</Title>
        <TouchableOpacity>
          <Image source={require("./assets/settings.png")} />
        </TouchableOpacity>
      </Header>
      <Content>
        <Text>ola</Text>
      </Content>
    </Container>
  );
};

export default Repository;
