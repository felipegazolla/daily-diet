import { Home } from '@screens/Home'
import theme from '@theme/index'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { MealStats } from '@screens/MealStats'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <MealStats /> : <Loading />}
    </ThemeProvider>
  )
}
