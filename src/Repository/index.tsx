import React from "react";
import AppLoading from "expo-app-loading";
import { Container, Title } from "./styles";
import { Roboto_500Medium, useFonts } from "@expo-google-fonts/roboto";

const Repository = () => {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Title font="Roboto_500Medium">WeFit</Title>
    </Container>
  );
};

export default Repository;
