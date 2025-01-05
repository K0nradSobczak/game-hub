import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

function Search({onSearch}: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(ref.current) onSearch(ref.current.value);
    }
    }>
      <InputGroup width={"100%"} startElement={<LuSearch />}>
        <Input
          ref={ref}
          placeholder="Search"
          borderRadius={20}
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  );
}

export default Search;
