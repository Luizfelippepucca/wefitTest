import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type TitleProps = {
  font: string;
};

export const Title = styled.Text<TitleProps>`
  font-family: ${({ font }) => font};
  font-size: 20px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
`;
