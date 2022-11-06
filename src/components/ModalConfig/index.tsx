import React, { useState } from "react";
import { TouchableWithoutFeedback, Animated, Text } from "react-native";
import {
  AreaButtons,
  Box,
  BtnCancel,
  BtnSave,
  ContentInput,
  Divider,
  Input,
  Label,
  LabelInsideInput,
  Overlay,
  TextButton,
} from "./styles";

import { ModalConfigProps } from "./types";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const ModalConfig = ({ onClose }: ModalConfigProps) => {
  const AnimatedBox = Animated.createAnimatedComponent(Box);
  const [height] = useState(new Animated.Value(0));

  Animated.timing(height, {
    toValue: 200,
    duration: 180,
    useNativeDriver: false,
  }).start();
  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <Overlay>
        <AnimatedBox height={height}>
          <Divider />
          <ContentInput>
            <Label>Alterar usuário selecionado</Label>
            <Input value="ola"></Input>
            <LabelInsideInput>Nome do usuário</LabelInsideInput>
          </ContentInput>
          <AreaButtons>
            <BtnCancel>
              <TextButton color="#1976D2">Cancelar</TextButton>
            </BtnCancel>
            <BtnSave
              style={{
                shadowColor: "#000",
                elevation: 2,
              }}
            >
              <TextButton>Salvar</TextButton>
            </BtnSave>
          </AreaButtons>
        </AnimatedBox>
      </Overlay>
    </TouchableWithoutFeedback>
  );
};

export default ModalConfig;
