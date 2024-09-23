import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;

  padding: 16px 24px;
  background-color: ${({theme})=> theme.COLORS.GRAY_2};
`