import styled from "styled-components/native";
type TitleProps = {
  font: string;
};

export const HeaderContainer = styled.View`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 16px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ font }) => font};
  font-size: 20px;
`;
