import React from "react";
import AppLoading from "expo-app-loading";
import { Container, Content, Header, Title } from "./styles";
import { Roboto_500Medium, useFonts } from "@expo-google-fonts/roboto";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Repository = () => {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
