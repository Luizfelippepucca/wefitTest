import { CardProps } from "@components/Card/types";
import Header from "@components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Image, Linking, Text } from "react-native";
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
  BtnFavorite,
  TextBtn,
  LinkContainer,
  TextLink,
  BtnUnfavorite,
} from "./styles";

const Details = () => {
  const [cardItem, setCardItem] = useState<CardProps | null>(null);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const nameFull = cardItem?.full_name.split("/");
  const title = nameFull && nameFull[0];
  const subtitle = nameFull && nameFull[1];
  const { goBack } = useNavigation();

  const handleNavigate = () => {
    goBack();
  };

  const handleOpenLink = () => {
    Linking.openURL(`${cardItem?.html_url}`);
  };

  const getDataCard = useCallback(async () => {
    const jsonValue = await AsyncStorage.getItem("@AsyncStorage:infosCard");
    if (jsonValue !== null) {
      const dataCard = JSON.parse(jsonValue);
      setCardItem(dataCard);
      return;
    }
  }, []);

  const getListfavorite = async () => {
    const favoriteListJson = await AsyncStorage.getItem(
      `@AsyncStorage:favorites`
    );
    if (favoriteListJson !== null) {
      const list = JSON.parse(favoriteListJson);
      list.map((element: CardProps) => {
        if (cardItem?.id === element.id) {
          setIsFavorite(true);
        }
      });
    }
  };
  useEffect(() => {
    getDataCard();
  }, [getDataCard]);

  useEffect(() => {
    getListfavorite();
  }, [cardItem, isFavorite]);

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
          <LinkContainer onPress={handleOpenLink}>
            <TextLink>Ver repositório</TextLink>
            <Image source={require(`./assets/link.png`)} />
          </LinkContainer>
          {isFavorite && (
            <BtnFavorite style={{ elevation: 2 }}>
              <TextBtn>Favoritar</TextBtn>
              <Image source={require(`./assets/starDark.png`)} />
            </BtnFavorite>
          )}
          {!isFavorite && (
            <BtnUnfavorite>
              <TextBtn>Desfavoritar</TextBtn>
              <Image source={require(`./assets/startFill.png`)} />
            </BtnUnfavorite>
          )}
        </AreaButtons>
      </Content>
    </Container>
  );
};

export default Details;
