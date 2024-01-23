import { Tag, TagProps } from '@chakra-ui/react'

const LiveTag: React.FC<TagProps> = (props) => {
  return (
    <Tag colorScheme="red" borderRadius={'md'} variant="solid" {...props}>
      Live Now
    </Tag>
  )
}

export default LiveTag
