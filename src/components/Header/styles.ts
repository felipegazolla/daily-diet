import { ArrowLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
`

export const BackButton = styled.TouchableOpacity`
  
`

export const BackIcon = styled(ArrowLeft).attrs(({theme})=> ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``