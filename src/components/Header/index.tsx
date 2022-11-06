import { Image, TouchableOpacity } from "react-native";
import { HeaderContainer, Title } from "./style";
import { HeaderProps } from "./types";

const Header = ({ name, click }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title font="Roboto_500Medium">{!name ? "WeFit" : name}</Title>
      <TouchableOpacity onPress={click}>
        <Image source={require("./assets/settings.png")} />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default Header;
