import React, { useState } from "react";
import { TouchableWithoutFeedback, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import useDebounce from "src/hooks";

const ModalConfig = ({ onClose }: ModalConfigProps) => {
  const AnimatedBox = Animated.createAnimatedComponent(Box);
  const [height] = useState(new Animated.Value(0));
  const [teste, setTeste] = useState("");
  const { debounce } = useDebounce();

  const handleChangeUserName = (text: string) => {
    /* Foi necessário fazer desta forma,
    pois toda vez que faço o setState,o teclado está fechando automaticamente.
    Pesquisei pelas possiveis soluções em issues inclusive de att dependencia e nenhum funcionou,
    creio que seja algum problema da versão com expo.
    */
    debounce(() => setTeste(text));
  };

  const handleSaveName = async () => {
    await AsyncStorage.setItem("@asyncStorage:userName", teste);
    onClose();
  };

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
            <Input onChangeText={handleChangeUserName} placeholder={teste} />
            <LabelInsideInput>Nome do usuário</LabelInsideInput>
          </ContentInput>
          <AreaButtons>
            <BtnCancel onPress={onClose}>
              <TextButton color="#1976D2">Cancelar</TextButton>
            </BtnCancel>
            <BtnSave
              style={{
                shadowColor: "#000",
                elevation: 2,
              }}
              onPress={handleSaveName}
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
