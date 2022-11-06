import { Image, TouchableOpacity } from "react-native";
import { HeaderContainer, Title } from "./style";

type HeaderProps = {
  name?: string;
};
const Header = ({ name }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title font="Roboto_500Medium">{!name ? "WeFit" : name}</Title>
      <TouchableOpacity>
        <Image source={require("./assets/settings.png")} />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default Header;
