import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";
import storeGames from "@/store/game-query";
import { useNavigate } from "react-router-dom";



function Search() {
  const ref = useRef<HTMLInputElement>(null);
  const searchGame = storeGames(s => s.searchGame);
  const navigate = useNavigate();
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(ref.current) {
        searchGame(ref.current.value)
        navigate('/');
      };
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
