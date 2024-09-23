import { TouchableOpacity } from 'react-native'
import { Arrow, Container, SubTitle, Title, TouchArea } from './styles'

type Props = {
  percentage: string
  subtitle: string
  stats: () => void
}

export function MealPercentage({ percentage, subtitle, stats }: Props) {
  return (
    <Container>
      <TouchArea onPress={stats}>
        <Arrow />
      </TouchArea>
      <Title>{percentage}%</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  )
}
