import { DetailsScreenProps } from "@components/MenuTabs/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Fragment } from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import {
  Container,
  CardHeader,
  Title,
  WrapperTitle,
  SubTitle,
  WrapperDescription,
  Description,
  CardFooter,
  AvatarCard,
  BtnFavorite,
  Textfavorite,
  WrapperNumberOfStars,
  TextNumberStar,
  Badge,
  BadgeText,
} from "./styles";
import { CardProps } from "./types";

const Card = ({
  description,
  full_name,
  id,
  html_url,
  language,
  stargazers_count,
  avatar,
  cLick,
}: CardProps) => {
  const nameFull = full_name.split("/");
  const title = nameFull[0];
  const subtitle = nameFull[1];
  const { navigate } = useNavigation<DetailsScreenProps>();
  const route = useRoute();

  const handleNavigate = async () => {
    const element = {
      description,
      full_name,
      id,
      html_url,
      language,
    };
    await AsyncStorage.setItem(
      "@AsyncStorage:infosCard",
      JSON.stringify(element)
    );
    navigate("Details");
  };

  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
      <Container style={{ elevation: 5 }}>
        <CardHeader>
          <WrapperTitle>
            <Title>{title}</Title>
            <SubTitle>/{subtitle}</SubTitle>
          </WrapperTitle>
          <AvatarCard source={{ uri: avatar }} />
        </CardHeader>
        <WrapperDescription>
          <Description>{description}</Description>
        </WrapperDescription>
        <CardFooter>
          {route.name !== "Favorites" && (
            <BtnFavorite onPress={cLick}>
              <Image source={require("./assets/star.png")} />
              <Textfavorite>Favoritar</Textfavorite>
            </BtnFavorite>
          )}
          <WrapperNumberOfStars route={route.name}>
            <Image source={require("./assets/star.png")} />
            <TextNumberStar>{stargazers_count}</TextNumberStar>
          </WrapperNumberOfStars>
          <Badge>
            {language !== null && (
              <Fragment>
                <Image source={require("./assets/badge.png")} />
                <BadgeText>{language}</BadgeText>
              </Fragment>
            )}
          </Badge>
        </CardFooter>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Card;
