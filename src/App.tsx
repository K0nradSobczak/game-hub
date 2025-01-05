import {
  Flex,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/my-components/nav-bar";
import GameGrid from "./components/my-components/game-grid";
import GenreList from "./components/my-components/genre-list";
import { useState } from "react";
import { Genre } from "./hooks/genre";
import PlatformSelector from "./components/my-components/platform-selector";
import { Platform } from "./hooks/games";
import SortSelector from "./components/my-components/sort-selector";

export interface GameQuery {
  genres: Genre | null;
  platforms: Platform | null;
  sortOrder: string | null;
}
function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [data, setData] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {showAside && (
        <GridItem area="aside" paddingX={"5"}>
          <GenreList
            selectedGenre={data.genres}
            changeGenre={(g: Genre) => setData({ ...data, genres: g })}
          />
        </GridItem>
      )}

      <GridItem area="main">
        <Flex
          gapX={2}
          paddingX={"1"}
          marginBottom={"2"}
        >
          <PlatformSelector
            platform={data.platforms}
            onSelectPlatform={(p: Platform) =>
              setData({ ...data, platforms: p })
            }
          />
          <SortSelector
            onSelectSort={(sortOrder) => setData({ ...data, sortOrder })}
            sorting={data.sortOrder}
          />
        </Flex>
        <GameGrid gameQuery={data} />
      </GridItem>
    </Grid>
  );
}

export default App;
