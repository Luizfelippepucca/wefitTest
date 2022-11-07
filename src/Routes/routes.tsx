import Repository from "src/Repository";
import Favorite from "src/Favorite";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "src/Details";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Repositórios"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Repository" component={Repository} />
      <Stack.Screen name="Favorites" component={Favorite} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Routes;
