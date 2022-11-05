import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Details from "../Details";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detalhes" component={Details} />
    </Tab.Navigator>
  );
};

export default Navigation;
