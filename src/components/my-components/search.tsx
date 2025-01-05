import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";

function Search() {
  return (
    <InputGroup startElement={<LuSearch/>} width={"100%"}>
      <Input placeholder="Search" borderRadius={20} variant={"subtle"} />
    </InputGroup>
  );
}

export default Search;
