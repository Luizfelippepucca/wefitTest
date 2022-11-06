import { View, TouchableWithoutFeedback } from "react-native";
import { Dimensions } from "react-native";
import { ModalConfigProps } from "./types";

const ModalConfig = ({ onClose }: ModalConfigProps) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View
        style={{
          width: windowWidth,
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "absolute",
          zIndex: 1,
        }}
      ></View>
    </TouchableWithoutFeedback>
  );
};

export default ModalConfig;
