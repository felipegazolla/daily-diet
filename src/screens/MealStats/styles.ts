import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 25px;
`

export const HeaderContainer = styled.View`
  width: 100%;
  height: 200px;
  padding-top: 80px;
  padding-left: 25px;
  padding-right: 25px;
`
