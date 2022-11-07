import { CardProps } from "@components/Card";
import Header from "@components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, Image } from "react-native";
import {
  Container,
  Content,
  AreaDetails,
  AreaButtons,
  Title,
  WrapperTitle,
  SubTitle,
  Description,
  Badge,
  BadgeText,
} from "./styles";

const Details = () => {
  const [cardItem, setCardItem] = useState<CardProps | null>(null);
  const nameFull = cardItem?.full_name.split("/");
  const title = nameFull && nameFull[0];
  const subtitle = nameFull && nameFull[1];
  const { goBack } = useNavigation();

  const handleNavigate = () => {
    goBack();
  };

  const getDataCard = async () => {
    const jsonValue = await AsyncStorage.getItem("@AsyncStorage:infosCard");
    if (jsonValue !== null) {
      const dataCard = JSON.parse(jsonValue);
      setCardItem(dataCard);
      return;
    }
  };

  useEffect(() => {
    getDataCard();
  }, [getDataCard]);

  return (
    <Container>
      <Header click={handleNavigate} name="Detalhes" />
      <Content>
        <AreaDetails>
          <WrapperTitle>
            <Title>{title}</Title>
            <SubTitle>/{subtitle}</SubTitle>
          </WrapperTitle>
          <Description>{cardItem?.description}</Description>
          <Badge>
            <Image source={require("src/components/Card/assets/badge.png")} />
            <BadgeText>{cardItem?.language}</BadgeText>
          </Badge>
        </AreaDetails>
        <AreaButtons>
          <Text>detalhes</Text>
        </AreaButtons>
      </Content>
    </Container>
  );
};

export default Details;
