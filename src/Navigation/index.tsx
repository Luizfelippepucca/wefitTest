import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Repository from "../Repository";
import Favorite from "../Favorite";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    // <Tab.Navigator
    //   initialRouteName="Repositórios"
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     tabBarIcon: ({ focused, color, size }) => {
    //       if (route.name === "Repositórios") {
    //         if (focused) {
    //           return <Image source={require("./assets/githubFocus.png")} />;
    //         }
    //         return <Image source={require("./assets/github.png")} />;
    //       }
    //       if (focused) {
    //         return <Image source={require("./assets/starFocus.png")} />;
    //       }
    //       return <Image source={require("./assets/star.png")} />;
    //     },
    //     tabBarStyle: { paddingBottom: 8, paddingTop: 8, height: 59 },
    //     tabBarLabelStyle: {
    //       fontFamily: "Roboto_400Regular",
    //       fontSize: 14,
    //     },
    //   })}
    // >
    //   <Tab.Screen name="Repositórios" component={Repository} />
    //   <Tab.Screen name="Favoritos" component={Favorite} />
    // </Tab.Navigator>
    <Stack.Navigator
      initialRouteName="Repositórios"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Repositórios" component={Repository} />
      <Stack.Screen name="Favoritos" component={Favorite} />
    </Stack.Navigator>
  );
};

export default Navigation;
