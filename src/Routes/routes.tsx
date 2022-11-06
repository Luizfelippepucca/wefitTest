import Repository from "../Repository";
import Favorite from "../Favorite";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Repositórios"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Repository" component={Repository} />
      <Stack.Screen name="Favorites" component={Favorite} />
    </Stack.Navigator>
  );
};

export default Routes;
