import { useState, useEffect } from 'react'
import { Button, HStack, Input, Spinner } from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { searchKeyword } from '../../../store/reducers/searchReducer'
import { useLocation } from 'wouter'
import { navigate } from 'wouter/use-location'

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [location] = useLocation()
  const dispatch = useDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (searchText.trim() === '') {
      return
    }

    setIsLoading(true)
    dispatch(searchKeyword(searchText))

    if (location !== '/') {
      navigate('/')
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    return () => {
      // Clean up any ongoing processes when component unmounts
      setIsLoading(false)
    }
  }, [])

  return (
    <HStack
      as={'form'}
      onSubmit={handleSubmit}
      justifyContent="center"
      spacing={4}
      align="center"
      borderRadius={'full'}
      bgColor={'grey'}
      flex={1}
      maxW={'550px'}
      gap={0}
    >
      <Input
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
        colorScheme="whiteAlpha"
        color={'white'}
        focusBorderColor="#555"
        w={'full'}
        borderLeftRadius={'full'}
        py={1}
        flex={1}
      />
      <Button
        margin={'0 !important'}
        flex={0.15}
        type="submit"
        mt={4}
        p={0}
        colorScheme="red"
        color={'white'}
        title="Search Button"
        bgColor={'black'}
        borderRightRadius={'full'}
      >
        {isLoading ? (
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="red.500" size="sm" />
        ) : (
          <RiSearch2Line size="22px" />
        )}
      </Button>
    </HStack>
  )
}

export default SearchBar
