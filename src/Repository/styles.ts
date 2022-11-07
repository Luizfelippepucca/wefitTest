import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 30px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding-bottom: 40px;
`;

export const ContentLoading = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-top-width: 6px;
  border-top-color: #ff0;
  border-color: #c3c3c3;
  border-width: 6px;
`;
