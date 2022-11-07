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
  LogoCard,
  BtnFavorite,
  Textfavorite,
  WrapperNumberOfStars,
  TextNumberStar,
  Badge,
  BadgeText,
} from "./styles";

export interface CardProps {
  full_name: string;
  description: string;
  stargazers_count: string;
  language: string;
  html_url: string;
  id: string;
}
const Card = ({
  description,
  full_name,
  id,
  html_url,
  language,
  stargazers_count,
}: CardProps) => {
  console.log(language);
  return (
    <TouchableWithoutFeedback onPress={() => console.log(full_name)}>
      <Container style={{ elevation: 10 }}>
        <CardHeader>
          <WrapperTitle>
            <Title>{full_name}</Title>
            <SubTitle>{full_name}</SubTitle>
          </WrapperTitle>
          <LogoCard source={require("./assets/logo.png")} />
        </CardHeader>
        <WrapperDescription>
          <Description>{description}</Description>
        </WrapperDescription>
        <CardFooter>
          <BtnFavorite>
            <Image source={require("./assets/star.png")} />
            <Textfavorite>Favoritar</Textfavorite>
          </BtnFavorite>
          <WrapperNumberOfStars>
            <Image source={require("./assets/star.png")} />
            <TextNumberStar>{stargazers_count}</TextNumberStar>
          </WrapperNumberOfStars>
          <Badge>
            <Image source={require("./assets/badge.png")} />
            <BadgeText>{language}</BadgeText>
          </Badge>
        </CardFooter>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Card;
