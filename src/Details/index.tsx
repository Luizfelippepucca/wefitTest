import Header from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
const Details = () => {
  const { goBack } = useNavigation();
  const handleNavigate = () => {
    goBack();
  };
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        flexDirection: "column",
        paddingTop: 30,
        backgroundColor: "#000",
      }}
    >
      <Header click={handleNavigate} name="Detalhes" />
      <View
        style={{ flex: 1, width: "100%", backgroundColor: "#E5E5E5" }}
      ></View>
      <Text>detalhes</Text>
    </View>
  );
};

export default Details;
