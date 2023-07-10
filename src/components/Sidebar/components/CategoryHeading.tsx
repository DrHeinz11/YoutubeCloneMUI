import { Heading } from '@chakra-ui/react'
import React from 'react'

const CategoryHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Heading fontSize="xl" textTransform="uppercase" color="base.gray">
      {children}
    </Heading>
  )
}

export default CategoryHeading
