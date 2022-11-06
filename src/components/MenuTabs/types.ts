import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "src/Routes/routes";

export type RepositoryScreenProps = NativeStackNavigationProp<
  RootStackParams,
  "Repository"
>;

export type FavoritesScreenProps = NativeStackNavigationProp<
  RootStackParams,
  "Favorites"
>;
