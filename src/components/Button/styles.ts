import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;

  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  gap: 10px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
