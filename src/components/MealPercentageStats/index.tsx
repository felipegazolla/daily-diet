import { Container, SubTitle, Title } from './styles'

type Props = {
  percentage: string
  subtitle: string
}

export function MealPercentageStats({ percentage, subtitle }: Props) {
  return (
    <Container>
      <Title>{percentage}%</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}
