import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  margin-top: 50px;
  background-color: ${({theme})=> theme.COLORS.GRAY_7};
  padding: 25px;
`