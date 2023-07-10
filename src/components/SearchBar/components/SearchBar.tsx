import { Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { searchKeyword } from '../../../store/reducers/searchReducer'
import { useDispatch } from 'react-redux'
import { useLocation } from 'wouter'
import { navigate } from 'wouter/use-location'

const SearchBar = () => {
  const [texto, setTexto] = useState('')
  const [location] = useLocation()
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto((event.target as HTMLInputElement).value)
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    // Realiza alguna acción con el valor del campo de texto
    dispatch(searchKeyword(texto))
    if (location !== '/') {
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }

  return (
    <HStack
      flex={1}
      justifyContent={'center'}
      spacing={0}
      gap={4}
      as={'form'}
      onSubmit={handleSubmit}
    >
      <Input
        value={texto}
        onChange={handleChange}
        placeholder="Ingresa un texto"
        colorScheme={'blackAlpha'}
        focusBorderColor="black"
      />
      <Button margin={'0 !important'} variant={'topNavBar'} type="submit" mt={4} colorScheme="blue">
        <RiSearch2Line size="22px" />
      </Button>
    </HStack>
  )
}

export default SearchBar
