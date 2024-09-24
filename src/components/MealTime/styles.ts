import { CheckCircle, Circle, X } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  align-items: center;
  padding: 6px;
  flex-direction: row;
  gap: 6px;
  margin-bottom: 6px;
`

export const TimeContainer = styled.View`
  width: 64px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

export const TimeText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const MealContainer = styled.View`
  width: 256px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 8px;
`

export const MealText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const StatusChecked = styled(CheckCircle).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
}))``

export const StatusX = styled(X).attrs(({ theme }) => ({
  color: theme.COLORS.RED_DARK,
}))``
