/* Code generated with AutoHTML Plugin for Figma */
import { HStack, chakra } from '@chakra-ui/react'
import React from 'react'

export interface IOptionProps {
  optionName?: string
  children: React.ReactNode
}

const Option = ({ optionName = 'Home', children, ...props }: IOptionProps): JSX.Element => {
  return (
    <HStack
      as={'a'}
      gap={'20px'}
      alignItems={'center'}
      justifyContent={'center'}
      flexShrink={'0'}
      position={'relative'}
      className="option"
    >
      {/* <chakra.svg
        position={'relative'}
        overflow={'visible'}
        flexShrink={'0'}
        className="option__vector"
        width="28px"
        height="28px"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 14.0001L13.9395 0.0605316L27.8791 14.0001M4.28919 17.2167V27.9395H23.5901V17.2167"
          stroke="#070707"
          strokeWidth="2.14455"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </chakra.svg> */}
      {children}
      <chakra.span
        color={'#070707'}
        textAlign={'left'}
        position={'relative'}
        className="option__home"
      >
        {optionName}{' '}
      </chakra.span>
    </HStack>
  )
}
export default Option
