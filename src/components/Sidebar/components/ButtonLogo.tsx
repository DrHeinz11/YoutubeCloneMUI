import { HStack } from '@chakra-ui/react'
import { Link } from 'wouter'
import { HandleScrollToTop } from '../../../utils'
import { useSidebarContext } from '../context/useSidebarContext'

const ButtonLogo = () => {
  const { setFocus } = useSidebarContext()
  return (
    <Link
      to={'/'}
      onClick={() =>
        HandleScrollToTop({
          direction: 'top',
          coordinate: 0,
          behavior: 'smooth'
        })
      }
    >
      <HStack py={4} px={6} onClick={() => setFocus({ value: 'home' })} _hover={{ opacity: 0.5 }}>
        {/* <Image src="/Yt-Draw.png" boxSize={'48px'} alt="YT-Draw Logo" />
        {/* <Heading display="flex" flexDir="row" alignItems="center" as="h4" fontSize="xl">
          YouTube-Draw
        </Heading> */}
        <svg
          width="27"
          height="19"
          viewBox="0 0 27 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3.74107C0 1.67494 1.67493 0 3.74107 0H22.4464C24.5126 0 26.1875 1.67494 26.1875 3.74107V14.9643C26.1875 17.0304 24.5126 18.7054 22.4464 18.7054H3.74107C1.67493 18.7054 0 17.0304 0 14.9643V3.74107Z"
            fill="#8583F9"
          />
          <path
            d="M16.343 8.795C16.8025 9.02478 16.8025 9.68059 16.343 9.91037L10.8785 12.6426C10.464 12.8499 9.97619 12.5484 9.97619 12.0849V6.62047C9.97619 6.15697 10.464 5.8555 10.8785 6.06279L16.343 8.795Z"
            fill="#070707"
          />
        </svg>
      </HStack>
    </Link>
  )
}

export default ButtonLogo
