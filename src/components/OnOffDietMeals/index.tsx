import { Container, OffDietMeals, OnDietMeals, SubTitle, Title } from './styles'

type Props = {
  inDiet: number
  offDiet: number
}

export function OnOffDietMeals({ inDiet, offDiet }: Props) {
  return (
    <Container>
      <OnDietMeals>
        <Title>{inDiet}</Title>
        <SubTitle>refeições dentro da dieta</SubTitle>
      </OnDietMeals>
      <OffDietMeals>
        <Title>{offDiet}</Title>
        <SubTitle>refeições fora da dieta</SubTitle>
      </OffDietMeals>
    </Container>
  )
}
