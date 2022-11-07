import { useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import { HeaderContainer, Title } from "./style";
import { HeaderProps } from "./types";

const Header = ({ name, click }: HeaderProps) => {
  const route = useRoute();
  return (
    <HeaderContainer route={route.name}>
      {route.name === "Details" && (
        <TouchableOpacity onPress={click} style={{ marginRight: 8 }}>
          <Image source={require("./assets/back.png")} />
        </TouchableOpacity>
      )}
      <Title font="Roboto_500Medium" route={route.name}>
        {!name ? "WeFit" : name}
      </Title>
      {route.name !== "Details" && (
        <TouchableOpacity onPress={click}>
          <Image source={require("./assets/settings.png")} />
        </TouchableOpacity>
      )}
    </HeaderContainer>
  );
};

export default Header;
