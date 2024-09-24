import styled from 'styled-components/native'

export const Container = styled.View`
  width: 327px;
  height: 110px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 8px;
  gap: 7px;
  margin: 6px;
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
