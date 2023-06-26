import { FormControl, Input } from "@chakra-ui/react";
import { useGetSearchVideosQuery } from "../../store/reducers/apiFetch";
import { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [SearchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetSearchVideosQuery(SearchValue);

  const handleSearch = (target) => setSearchValue(target.value);

  return (
    <>
      <FormControl onSubmit={(target) => handleSearch(target)}>
        <Input placeholder="Search" type="text" value={SearchValue} />
      </FormControl>
      {JSON.stringify(data)}
    </>
  );
};

export default SearchBar;
