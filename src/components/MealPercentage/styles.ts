import { ArrowUpRight } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  align-items: center;
`
export const Arrow = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``

export const TouchArea = styled.TouchableOpacity`
  position: absolute;
  right: 4px;
  top: 4px;
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
