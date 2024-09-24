import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`
