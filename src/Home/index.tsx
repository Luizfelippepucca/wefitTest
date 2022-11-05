import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #00ff00;
  padding: 20px 10px;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Text>home</Text>
    </Container>
  );
};

export default Home;
