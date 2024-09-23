import { Header } from '@components/Header'
import { Container } from './styles'
import { MealPercentage } from '@components/MealPercentage'
import { Separator } from '@components/Separator'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { LabelText } from '@components/LabelText'

export function Home() {
  return (
    <Container>
      <Header />

      <Separator />

      <MealPercentage
        stats={() => {}}
        percentage="90,86"
        subtitle="das refeições dentro da dieta"
      />
      
      <Separator />

      <LabelText title='Refeições'/>
      <Button title='Nova refeição' Icon={Plus} />


    </Container>
  )
}
