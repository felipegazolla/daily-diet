import { Header } from '@components/Header'
import { Container, HeaderContainer } from './styles'
import { MealPercentageStats } from '@components/MealPercentageStats'
import { Separator } from '@components/Separator'
import { LabelTextMid } from '@components/LabelTextMid'
import { GeneralStats } from '@components/GeneralStats'
import { OnOffDietMeals } from '@components/OnOffDietMeals'

export function MealStats() {
  return (
    <>
      <HeaderContainer>
        <Header showBackButton />
        <MealPercentageStats
          percentage="90,86"
          subtitle="das refeições dentro da dieta"
        />
      </HeaderContainer>
      <Container>
        <LabelTextMid title="Estatísticas gerais" />
        <GeneralStats
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />
        <GeneralStats
          title="109"
          subtitle="refeições registradas"
        />

        <OnOffDietMeals inDiet={99} offDiet={10}/>
      </Container>
    </>
  )
}
