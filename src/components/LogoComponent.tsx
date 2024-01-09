import { Image } from '@chakra-ui/react'
import { Link } from 'wouter'

const LogoComponent = () => {
  return (
    <Link href="/">
      <Image cursor={'pointer'} alt="Logo-DrawTube" src="/Logo.svg" w={'150px'} h={'auto'} />
    </Link>
  )
}

export default LogoComponent
