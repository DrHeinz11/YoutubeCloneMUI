import { HStack, Stack } from '@chakra-ui/react'
import { AiFillSetting } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
const General = () => {
  return (
    <Stack py={4} px={6}>
      {/* <CategoryHeading>General</CategoryHeading> */}
      <Stack>
        <HStack pl={'3px'} className="links" cursor="pointer" justify="flex-start">
          <AiFillSetting size="22px" />

          {/* <Heading textTransform="capitalize" fontWeight="medium" fontSize="lg">
            settings
          </Heading> */}
        </HStack>
        <HStack className="links" cursor="pointer" justify="flex-start">
          <BiLogOut size="22px" />
          {/* <Heading textTransform="uppercase" fontWeight="medium" fontSize="lg">
            log out
          </Heading> */}
        </HStack>
      </Stack>
    </Stack>
  )
}

export default General
