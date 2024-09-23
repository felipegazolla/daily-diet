import type { IconProps } from 'phosphor-react-native'
import { Container, Title } from './styles'

type Props = {
  title: string
  Icon?: React.ComponentType<IconProps>
}

export function Button({ title, Icon }: Props) {
  return (
    <Container>
      {Icon && <Icon size={24} color='white' />}
      <Title>
        {title}
      </Title>
    </Container>
  )
}
