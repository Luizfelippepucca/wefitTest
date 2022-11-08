import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  padding-top: 30px;
  background-color: #fff;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: #e5e5e5;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const AreaDetails = styled.View`
  width: 100%;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 16px;
  color: #070707;
`;

export const SubTitle = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 16px;
  color: #070707;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: "Inter_400Regular";
  color: #9a9a9a;
`;

export const Badge = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const BadgeText = styled.Text`
  color: #9a9a9a;
  font-size: 12px;
  font-family: "Inter_400Regular";
  padding-left: 4px;
`;
export const AreaButtons = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BtnFavorite = styled.TouchableOpacity`
  background-color: #ffd02c;
  border-radius: 4px;
  width: 100%;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BtnUnfavorite = styled.TouchableOpacity`
  border-radius: 4px;
  width: 100%;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  border-color: #000;
`;

export const TextBtn = styled.Text`
  color: #000;
  font-family: "Roboto_500Medium";
  font-size: 15px;
  margin: 0px 10px;
  text-transform: uppercase;
`;

export const LinkContainer = styled.TouchableOpacity`
  width: 100%;
  height: 42px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextLink = styled.Text`
  color: #1976d2;
  font-family: "Roboto_500Medium";
  font-size: 15px;
  margin: 0px 10px;
  text-transform: uppercase;
`;
