import {
  HStack,
  Stack,
  Box,
  Heading,
  chakra,
  Button,
  Image,
  Text,
  ImageProps
} from '@chakra-ui/react'

type ImageComponentProps = ImageProps

const ImageComponent = ({ src, aspectRatio, alt, objectFit, ...rest }: ImageComponentProps) => (
  <Image aspectRatio={aspectRatio} src={src} alt={alt} objectFit={objectFit} {...rest} />
)

const imageUrls = {
  mainImage:
    'https://th.bing.com/th/id/OIP.xd0TS_2LBdIPmScswq8SBwHaC2?pid=ImgDet&w=1600&h=616&rs=1',
  secondaryImage:
    'https://th.bing.com/th/id/OIP.2pAo6vuBfESNl1kDithiewHaDa?pid=ImgDet&w=800&h=369&rs=1',
  avatar: 'https://th.bing.com/th/id/OIP.Y5K4rXG8WqKQYTE_udqmjQHaHC?pid=ImgDet&rs=1'
}

const MainImage = () => (
  <ImageComponent
    src={imageUrls.mainImage}
    aspectRatio="16/9"
    alt=""
    objectFit="fill"
    h="inherit"
    maxH={{ base: '150px', md: '225px' }}
    flex="1 0 250px"
    borderRadius="0"
  />
)

const SecondaryImage = () => (
  <ImageComponent
    src={imageUrls.secondaryImage}
    aspectRatio="16/9"
    alt=""
    maxH="115px"
    objectFit="cover"
    objectPosition={{ base: 'center', md: 'top' }}
    flex={1}
    borderRadius="0"
  />
)

const Avatar = () => (
  <Box bgColor="white" flex="0 0 48px" borderRadius="0" boxSize="48px" p={2}>
    <ImageComponent
      src={imageUrls.avatar}
      aspectRatio="1/1"
      alt=""
      objectFit="contain"
      w="full"
      h="full"
    />
  </Box>
)

const HeaderPublicity = () => {
  return (
    <HStack
      bgColor="black"
      maxW="full"
      flexWrap="wrap"
      p={{ base: 2, md: 4 }}
      borderRadius={'xl'}
      as="header"
      minH={'260px'}
      gap={4}
      className='card'
    >
      <MainImage />
      <Stack flex="1 0 250px" gap={2}>
        <SecondaryImage />
        <HStack
          flex={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={4}
          px={1}
          maxH="inherit"
          py={2}
          bgColor="black"
        >
          <Avatar />
          <Stack color="white" spacing={0} gap={2} flex={1}>
            <Heading fontSize="md">Call #012# and Get Free McDonald's Meal</Heading>
            <Text fontSize="14px" display="flex" flexDir="row" gap={2}>
              <chakra.span px="15px" bgColor="yellow" color="black">
                Ad
              </chakra.span>
              Orange Egypt
            </Text>
            <Button size="sm" fontSize="xs" w="fit-content" colorScheme="cyan" borderRadius="0">
              SEE MORE
            </Button>
          </Stack>
        </HStack>
      </Stack>
    </HStack>
  )
}

export default HeaderPublicity
