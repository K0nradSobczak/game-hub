import GameGrid from "@/components/my-components/game-grid";
import GenreList from "@/components/my-components/genre-list";
import Headding from "@/components/my-components/headding";
import PlatformSelector from "@/components/my-components/platform-selector";
import SortSelector from "@/components/my-components/sort-selector";
import { Grid, GridItem, Box, Flex, useBreakpointValue } from "@chakra-ui/react";


const HomePage = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
          templateAreas={{
            base: `"main"`,
            lg: `"aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
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
  )
}

export default HomePage;