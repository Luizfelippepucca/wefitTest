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

export const Header = styled.View`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 16px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #c3c3c3;
  padding: 0px 16px;
`;
