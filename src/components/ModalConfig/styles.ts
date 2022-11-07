import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { BoxProps, TextButtonProps } from "./types";

const windowWidth = Dimensions.get("window").width;

export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Box = styled.View<BoxProps>`
  background-color: #fff;
  width: 100%;
  height: ${({ height }) => height}px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;

export const Divider = styled.View`
  width: 30px;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 12px;
`;

export const ContentInput = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Label = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Input = styled.TextInput`
  background-color: #f0f0f0;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.42);
  height: 56px;
  position: relative;
  padding-left: 15px;
  font-size: 16px;
  padding-top: 10px;
  font-family: "Roboto_400Regular";
  ::placeholder {
    color: #000;
  }
`;

export const LabelInsideInput = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 35px;
  left: 15px;
  bottom: 0;
`;

export const AreaButtons = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnCancel = styled.TouchableOpacity`
  width: 174px;
  height: 42px;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
`;

export const BtnSave = styled.TouchableOpacity`
  width: 174px;
  height: 42px;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  background-color: #1976d2;
`;

export const TextButton = styled.Text<TextButtonProps>`
  color: ${({ color }) => (color ? color : "#fff")};
  font-family: "Roboto_500Medium";
  text-transform: uppercase;
  letter-spacing: 0.46px;
`;
