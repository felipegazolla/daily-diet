import {
  Container,
  MealContainer,
  MealText,
  StatusChecked,
  StatusX,
  TimeContainer,
  TimeText,
} from './styles'

type Props = {
  time: string
  meal: string
  status: boolean
}

export function MealTime({ time, meal, status }: Props) {
  return (
    <Container>
      <TimeContainer>
        <TimeText>{time}</TimeText>
      </TimeContainer>

      <MealContainer>
        <MealText>{meal}</MealText>
        {status ? <StatusChecked /> : <StatusX/>}
      </MealContainer>
    </Container>
  )
}
