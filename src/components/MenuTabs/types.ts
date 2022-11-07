import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@routes/types";

export type RepositoryScreenProps = NativeStackNavigationProp<
  RootStackParams,
  "Repository"
>;

export type FavoritesScreenProps = NativeStackNavigationProp<
  RootStackParams,
  "Favorites"
>;

export type DetailsScreenProps = NativeStackNavigationProp<
  RootStackParams,
  "Details"
>;
