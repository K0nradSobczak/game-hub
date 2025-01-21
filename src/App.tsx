import {
  Box,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/my-components/nav-bar";
import GameGrid from "./components/my-components/game-grid";
import GenreList from "./components/my-components/genre-list";
import { useState } from "react";
import { Genre } from "./hooks/genre";
import PlatformSelector from "./components/my-components/platform-selector";
import SortSelector from "./components/my-components/sort-selector";
import Headding from "./components/my-components/headding";
import { Platforms } from "./hooks/platforms";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortOrder: string | null;
  search: string;
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
      <GridItem paddingBottom={3} area="nav">
        <NavBar onSearch={(search: string) => setData({ ...data, search })} />
      </GridItem>

      {showAside && (
        <GridItem area="aside" paddingX={"5"}>
          <GenreList
            selectedGenre={data.genreId}
            changeGenre={(g: Genre) => setData({ ...data, genreId: g.id })}
          />
        </GridItem>
      )}

      <GridItem area="main">
        <Box paddingX={"1"}>
        <Headding gameQuery={data} />
          <Flex gapX={2} marginBottom={"2"}>
            <PlatformSelector
              platform={data.platformId}
              onSelectPlatform={(p: Platforms) =>
                setData({ ...data, platformId: p.id })
              }
            />
            <SortSelector
              onSelectSort={(sortOrder) => setData({ ...data, sortOrder })}
              sorting={data.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={data} />
      </GridItem>
    </Grid>
  );
}

export default App;
