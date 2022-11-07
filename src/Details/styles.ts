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

export const AreaButtons = styled.View`
  background-color: #ff0;
  width: 100%;
  height: 200px;
`;
export const WrapperTitle = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 20px;
  color: #070707;
`;

export const SubTitle = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 20px;
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
