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
import PlatformSelector from "./components/my-components/platform-selector";
import SortSelector from "./components/my-components/sort-selector";
import Headding from "./components/my-components/headding";


function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });


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
        <NavBar  />
      </GridItem>

      {showAside && (
        <GridItem area="aside" paddingX={"5"}>
          <GenreList/>
        </GridItem>
      )}

      <GridItem area="main">
        <Box paddingX={"1"}>
        <Headding/>
          <Flex gapX={2} marginBottom={"2"}>
            <PlatformSelector/>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
