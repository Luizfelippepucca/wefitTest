import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalConfigProps } from "./types";
import useDebounce from "src/hooks";

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
import { useNavigation, useRoute } from "@react-navigation/native";

const ModalConfig = ({ onClose }: ModalConfigProps) => {
  const [valueInput, setValueInput] = useState("");
  const { goBack } = useNavigation();
  const route = useRoute();

  const handleChangeUserName = (text: string) => {
    setValueInput(text);
  };

  const handleSaveName = async () => {
    await AsyncStorage.setItem("@asyncStorage:userName", valueInput);
    onClose();
    if (route.name === "Favorites") {
      goBack();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <Overlay>
        <Box>
          <Divider />
          <ContentInput>
            <Label>Alterar usuário selecionado</Label>
            <Input
              onChangeText={handleChangeUserName}
              placeholder={valueInput}
              value={valueInput}
            />
            <LabelInsideInput>Nome do usuário</LabelInsideInput>
          </ContentInput>
          <AreaButtons>
            <BtnCancel onPress={onClose}>
              <TextButton color="#1976D2">Cancelar</TextButton>
            </BtnCancel>
            <BtnSave
              style={{
                elevation: 2,
              }}
              onPress={handleSaveName}
            >
              <TextButton>Salvar</TextButton>
            </BtnSave>
          </AreaButtons>
        </Box>
      </Overlay>
    </TouchableWithoutFeedback>
  );
};

export default ModalConfig;
