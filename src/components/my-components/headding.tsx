import { GameQuery } from "@/App";
import { findGenre } from "@/hooks/genre";
import { findPlatform } from "@/hooks/platforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function Headding({ gameQuery }: Props) {
  // hooks
  const genre = findGenre(gameQuery.genreId);
  const platform = findPlatform(gameQuery.platformId);

  // extract data

  const head = `${genre?.name || ""} ${platform?.name || ""} Games`;

  return (
    <Heading paddingBottom={3} fontSize={"2xl"} as="h1">
      {head}
    </Heading>
  );
}

export default Headding;
