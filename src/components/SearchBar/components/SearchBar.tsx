import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { searchKeyword } from "../../../store/reducers/searchReducer";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [texto, setTexto] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realiza alguna acción con el valor del campo de texto
    dispatch(searchKeyword(texto));
  };

  return (
    <HStack
      flex={1}
      justifyContent={"center"}
      spacing={0}
      gap={4}
      as={"form"}
      onSubmit={handleSubmit}
    >
      <Input
        value={texto}
        onChange={handleChange}
        placeholder="Ingresa un texto"
        colorScheme={"blackAlpha"}
        focusBorderColor="black"
      />
      <Button
        margin={"0 !important"}
        variant={"topNavBar"}
        type="submit"
        mt={4}
        colorScheme="blue"
      >
        <RiSearch2Line size="22px" />
      </Button>
    </HStack>
  );
};

export default SearchBar;
