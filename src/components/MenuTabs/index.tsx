import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ContainerMenu, AreaItemsTabs, ItemTab, IconTabs } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FavoritesScreenProps, RepositoryScreenProps } from "./types";

const MenuTabs = () => {
  const { navigate } = useNavigation<
    RepositoryScreenProps | FavoritesScreenProps
  >();
  return (
    <ContainerMenu>
      <AreaItemsTabs>
        <TouchableOpacity onPress={() => navigate("Repository")}>
          <ItemTab>
            <IconTabs source={require("./assets/github.png")} />
            <Text>Repositórios</Text>
          </ItemTab>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Favorites")}>
          <ItemTab>
            <IconTabs source={require("./assets/star.png")} />
            <Text>Favoritos</Text>
          </ItemTab>
        </TouchableOpacity>
      </AreaItemsTabs>
    </ContainerMenu>
  );
};

export default MenuTabs;
