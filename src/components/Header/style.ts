import styled from "styled-components/native";
type TitleProps = {
  font: string;
  route: string;
};

interface HeaderContainerProps {
  route: string;
}

export const HeaderContainer = styled.View<HeaderContainerProps>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: ${({ route }) =>
    route === "Details" ? "flex-start" : "space-between"};
  flex-direction: row;
  padding: ${({ route }) => (route === "Details" ? "0px 32px" : "0px 16px")};
  background-color: ${({ route }) =>
    route === "Details" ? "#000" : "trasnparent"};
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ font }) => font};
  font-size: 20px;
  color: ${({ route }) => (route === "Details" ? "#fff" : "")};
`;
