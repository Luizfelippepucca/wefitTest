import React from "react";
import { Container, Title } from "./styles";
import Header from "@components/Header";
import MenuTabs from "@components/MenuTabs";

const Favorite = () => {
  return (
    <Container>
      <Header click={() => console.log("clicou")} />
      <Title font="Roboto_500Medium">WeFit Details</Title>
      <MenuTabs />
    </Container>
  );
};

export default Favorite;
