import { GameQuery } from "@/App";
import useGenre from "@/hooks/genre";
import usePlatforms from "@/hooks/platforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function Headding({gameQuery}: Props) {
  // hooks
  const { data }= useGenre();
  const { data: platforms } = usePlatforms();

  // extract data
  const genre = data?.results.find(g => g?.id === gameQuery.genreId)
  const platform = platforms?.results.find(p => p?.id === gameQuery.platformId)

  const head = `${genre?.name || ''} ${platform?.name || ''} Games`;

  return (
    <Heading paddingBottom={3} fontSize={"2xl"} as="h1">{head}</Heading>
  )
}

export default Headding