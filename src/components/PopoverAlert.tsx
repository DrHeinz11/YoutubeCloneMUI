import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@chakra-ui/react'
import { ReactNode, useState } from 'react'

type Props = { children: ReactNode; header: string; content: JSX.Element }
interface buttonStylesType {
  _hover: {
    color: string
  }
  color: string
  variant: string
}
const PopoverAlert = ({ children, content, header }: Props) => {
  const [trigger, setTrigger] = useState(false)

  const buttonStyles: buttonStylesType = {
    _hover: { color: 'red.500' },
    color: trigger ? 'red.400' : 'white',
    variant: 'topNavBar'
  }

  const handleTriggerClick = () => setTrigger((prev) => !prev)

  return (
    <Popover onClose={() => setTrigger(false)}>
      <PopoverTrigger>
        <Button onClick={handleTriggerClick} {...buttonStyles}>
          {children}
        </Button>
      </PopoverTrigger>
      <PopoverContent color="black">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{header}</PopoverHeader>
        <PopoverBody>{content}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
export default PopoverAlert
