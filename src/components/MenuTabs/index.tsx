import React from "react";
import { TouchableOpacity } from "react-native";
import {
  ContainerMenu,
  AreaItemsTabs,
  ItemTab,
  IconTabs,
  LabelTabs,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FavoritesScreenProps, RepositoryScreenProps } from "./types";

const MenuTabs = () => {
  const route = useRoute();
  const { navigate } = useNavigation<
    RepositoryScreenProps | FavoritesScreenProps
  >();

  const navigatefocus = () => {
    if (route.name === "Repository") {
      navigate("Favorites");
      return;
    }
    navigate("Repository");
  };

  return (
    <ContainerMenu>
      <AreaItemsTabs>
        <TouchableOpacity onPress={navigatefocus}>
          <ItemTab>
            <IconTabs
              source={
                route.name === "Repository"
                  ? require("./assets/githubFocus.png")
                  : require("./assets/github.png")
              }
            />
            <LabelTabs
              font="Roboto_400Regular"
              focus={route.name === "Repository"}
            >
              Repositórios
            </LabelTabs>
          </ItemTab>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigatefocus}>
          <ItemTab>
            <IconTabs
              source={
                route.name === "Repository"
                  ? require("./assets/star.png")
                  : require("./assets/starFocus.png")
              }
            />
            <LabelTabs
              font="Roboto_400Regular"
              focus={route.name === "Favorites"}
            >
              Favoritos
            </LabelTabs>
          </ItemTab>
        </TouchableOpacity>
      </AreaItemsTabs>
    </ContainerMenu>
  );
};

export default MenuTabs;
