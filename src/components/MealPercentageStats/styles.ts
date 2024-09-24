import styled from "styled-components/native";

export const Container = styled.View`
  width: 120%;
  height: 200px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
  padding-top: 70px;
  position: absolute;
  z-index: -1;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  margin-top: 26px;
  text-align: center;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 2px;
  text-align: center;
`