import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 327px;
  gap: 10px;
  justify-content: center;
  margin-top: 6px;
`

export const OnDietMeals = styled.View`
  width: 157px;
  height: 107px;
  background-color: ${({theme})=> theme.COLORS.GREEN_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
`

export const OffDietMeals = styled.View`
  width: 157px;
  height: 107px;
  background-color: ${({theme})=> theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-top: 2px;
  text-align: center;
`
