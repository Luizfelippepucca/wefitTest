import { DetailsScreenProps } from "@components/MenuTabs/types";
import { useNavigation } from "@react-navigation/native";
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
  const nameFull = full_name.split("/");
  const title = nameFull[0];
  const subtitle = nameFull[1];
  const { navigate } = useNavigation<DetailsScreenProps>();

  const handleNavigate = () => {
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
