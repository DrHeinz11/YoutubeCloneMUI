import { Box, Collapse, HStack, Tag, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

type Props = { description: string; tags: string[] }

const CollapseDescription = ({ description, tags }: Props) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Box>
      <Collapse onClick={handleToggle} startingHeight={116} in={show}>
        <Text cursor={'pointer'}>{description}</Text>
        <HStack mt={2} gap={1} spacing={0} wrap={'wrap'}>
          {tags?.map((tag) => (
            <Tag colorScheme="blackAlpha" variant="outline" key={tag}>
              {tag}
            </Tag>
          ))}
        </HStack>
      </Collapse>
      <HStack
        w={'full'}
        as={'button'}
        type="button"
        title="collapse-arrow"
        aria-label="Collapse Arrow"
        onClick={handleToggle}
        justifyContent={'flex-end'}
      >
        {show ? <IoMdArrowDropup size="2em" /> : <IoMdArrowDropdown size="2em" />}
      </HStack>
    </Box>
  )
}

export default CollapseDescription
