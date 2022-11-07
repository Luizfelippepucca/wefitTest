import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 151px;
  border-radius: 4px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  margin-top: 10px;
`;

export const CardHeader = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: rgba(218, 218, 218, 0.9);
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
`;

export const LogoCard = styled.Image``;

export const Title = styled.Text`
  font-family: "Inter_400Regular";
  font-size: 12px;
`;

export const SubTitle = styled.Text`
  font-family: "Inter_700Bold";
  font-size: 12px;
`;

export const WrapperDescription = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: "Inter_400Regular";
  color: #9a9a9a;
`;

export const CardFooter = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BtnFavorite = styled.TouchableOpacity`
  background-color: #faf3dc;
  width: 103px;
  height: 36px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0px 8px;
`;

export const Textfavorite = styled.Text`
  color: #ffd02c;
  font-family: "Inter_700Bold";
  font-size: 12px;
`;

export const WrapperNumberOfStars = styled.View`
  width: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextNumberStar = styled.Text`
  color: #9a9a9a;
  font-size: 12px;
  font-family: "Inter_400Regular";
`;

export const Badge = styled.View`
  width: 85px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BadgeText = styled.Text`
  color: #9a9a9a;
  font-size: 12px;
  font-family: "Inter_400Regular";
`;
