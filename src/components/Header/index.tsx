import { BackButton, BackIcon, Container, Logo, Profile } from './styles'
import logo from '@assets/logoDailyDiet.png'
import profile from '@assets/Profile.png'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton>
          <BackIcon />
        </BackButton>
      ) : (
        <>
          <Logo source={logo} />
          <Profile source={profile} />
        </>
      )}
    </Container>
  )
}
