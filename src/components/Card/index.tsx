import { Image } from "react-native";
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
const Card = () => {
  return (
    <Container style={{ elevation: 10 }}>
      <CardHeader>
        <WrapperTitle>
          <Title>appswefit</Title>
          <SubTitle>/create-react-app</SubTitle>
        </WrapperTitle>
        <LogoCard source={require("./assets/logo.png")} />
      </CardHeader>
      <WrapperDescription>
        <Description>
          Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.
        </Description>
      </WrapperDescription>
      <CardFooter>
        <BtnFavorite>
          <Image source={require("./assets/star.png")} />
          <Textfavorite>Favoritar</Textfavorite>
        </BtnFavorite>
        <WrapperNumberOfStars>
          <Image source={require("./assets/star.png")} />
          <TextNumberStar>0</TextNumberStar>
        </WrapperNumberOfStars>
        <Badge>
          <Image source={require("./assets/badge.png")} />
          <BadgeText>Typescript</BadgeText>
        </Badge>
      </CardFooter>
    </Container>
  );
};

export default Card;
