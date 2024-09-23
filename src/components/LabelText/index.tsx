import { Container, Title } from "./styles";

type Props = {
  title: string
}

export function LabelText({title}: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}