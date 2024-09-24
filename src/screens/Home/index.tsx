import { Header } from '@components/Header'
import { Container } from './styles'
import { MealPercentage } from '@components/MealPercentage'
import { Separator } from '@components/Separator'
import { Button } from '@components/Button'
import { Plus } from 'phosphor-react-native'
import { LabelText } from '@components/LabelText'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { MealsDate } from '@components/MealsDate'
import { MealTime } from '@components/MealTime'

export function Home() {
  const [meal, setMeal] = useState([''])

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

      <LabelText title="Refeições" />
      <Button title="Nova refeição" Icon={Plus} />

      <Separator />

      <MealsDate title='24.09.24'/>
      <MealTime status={true} time='09:00' meal='Arroz com ovo'/>

    </Container>
  )
}
