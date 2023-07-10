import { Collapse, HStack, Tag, Text } from '@chakra-ui/react'
import { useState } from 'react'

type Props = { description: string; tags: string[] }

const CollapseDescription = ({ description, tags }: Props) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  return (
    <Collapse onClick={handleToggle} startingHeight={76} in={show}>
      <Text cursor={'pointer'}>{description}</Text>
      <HStack mt={2} gap={1} spacing={0} wrap={'wrap'}>
        {tags.map((tag) => (
          <Tag colorScheme="blackAlpha" variant="outline" key={tag}>
            {tag}
          </Tag>
        ))}
      </HStack>
    </Collapse>
  )
}

export default CollapseDescription
