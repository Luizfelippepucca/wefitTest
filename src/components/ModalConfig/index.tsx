import { Text, View } from "react-native";
import { Dimensions } from "react-native";
const ModalConfig = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "#ff0000",
        position: "absolute",
        zIndex: 2,
      }}
    >
      <Text>modal</Text>
    </View>
  );
};

export default ModalConfig;
