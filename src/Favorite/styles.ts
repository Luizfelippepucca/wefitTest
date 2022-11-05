import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 10px;
  align-items: center;
  justify-content: center;
`;

type TitleProps = {
  font: string;
};

export const Title = styled.Text<TitleProps>`
  font-family: ${({ font }) => font};
  font-size: 20px;
`;
