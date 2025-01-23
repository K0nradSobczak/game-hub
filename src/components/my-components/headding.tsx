import { findGenre } from "@/hooks/genre";
import { findPlatform } from "@/hooks/platforms";
import storeGames  from "@/store/game-query";
import { Heading } from "@chakra-ui/react";



function Headding() {
  // get stored data
  const genreId = storeGames(s => s.gameQuery.genreId);
  const platformId = storeGames(s => s.gameQuery.platformId);

  // extract data
  const genre = findGenre(genreId);
  const platform = findPlatform(platformId);


  const head = `${genre?.name || ""} ${platform?.name || ""} Games`;

  return (
    <Heading paddingBottom={3} fontSize={"2xl"} as="h1">
      {head}
    </Heading>
  );
}

export default Headding;
