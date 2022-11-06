import styled from "styled-components/native";

export const ContainerMenu = styled.View`
  width: 100%;
  height: 56px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AreaItemsTabs = styled.View`
  width: 100%;
  max-width: 300px;
  height: 56px;
  padding: 0px 22px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemTab = styled.View`
  width: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const IconTabs = styled.Image``;
interface LabelProps {
  font: string;
  focus?: boolean;
}
export const LabelTabs = styled.Text<LabelProps>`
  font-family: ${({ font }) => font};
  font-size: ${({ focus }) => (focus ? "14px" : "12px")};
  color: ${({ focus }) => (focus ? "#1976D2" : "rgba(0,0,0,0.6)")};
`;
