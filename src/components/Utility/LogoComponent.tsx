import { Image } from '@chakra-ui/react'
import { Link } from 'wouter'

const LogoComponent = ({ onClose }: { onClose?: () => void }) => {
  return (
    <Link onClick={onClose} href="/">
      <Image cursor={'pointer'} alt="Logo-DrawTube" src="/Logo.svg" w={'150px'} h={'auto'} />
    </Link>
  )
}

export default LogoComponent
