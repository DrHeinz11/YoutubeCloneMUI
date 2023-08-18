import { Button, Box, Image, useOutsideClick } from '@chakra-ui/react'
import { ReactNode, useRef, useState } from 'react'
import { IconType } from 'react-icons'
interface OptionPopoverProps {
  icon: IconType | undefined
  variant?: string
  avatarSrc?: string
  children: ReactNode
}

function OptionPopover({ icon: Icon, variant, avatarSrc, children }: OptionPopoverProps) {
  const ref = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false)
  })

  return (
    <>
      <Button
        variant={'topNavBar'}
        margin={'0 !important'}
        aria-label={'Notifications'}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {variant === 'avatar' ? (
          <Image src={avatarSrc} alt={variant} boxSize={'24px'} borderRadius={'full'} />
        ) : (
          Icon && <Icon size={'24px'} />
        )}
      </Button>
      {isModalOpen && (
        <Box
          ref={ref.current}
          boxSize={'md'}
          position={'absolute'}
          zIndex={'popover'}
          bgColor={'blackAlpha.400'}
          top={14}
          right={0}
        >
          {children}
        </Box>
      )}
    </>
  )
}

export default OptionPopover
