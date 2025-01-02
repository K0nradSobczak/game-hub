import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/my-components/nav-bar";
import GameGrid from "./components/my-components/game-grid";
import GenreList from "./components/my-components/genre-list";
import { useState } from "react";
import { Genre } from "./hooks/genre";
function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [genre, setGenre] = useState<Genre | null>(null);

  const handleGenre = (g: Genre) => {
    setGenre(g);
  }

  return (

      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: '200px 1fr'
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>

        {showAside && (
          <GridItem area="aside" paddingX={"5"}>
            <GenreList selectedGenre={genre} changeGenre={handleGenre}/>
          </GridItem>
        )}

        <GridItem area="main" >
          <GameGrid selected={genre}/>
        </GridItem>
      </Grid>
  );
}

export default App;
