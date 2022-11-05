import { Image, TouchableOpacity } from "react-native";
import { HeaderContainer, Title } from "./style";
const Header = () => {
  return (
    <HeaderContainer>
      <Title font="Roboto_500Medium">WeFit</Title>
      <TouchableOpacity>
        <Image source={require("./assets/settings.png")} />
      </TouchableOpacity>
    </HeaderContainer>
  );
};

export default Header;
