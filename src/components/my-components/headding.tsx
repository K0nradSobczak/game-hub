import { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

function Headding({gameQuery}: Props) {
  const head = `${gameQuery.genres?.name || ''} ${gameQuery.platforms?.name || ''} Games`;

  return (
    <Heading paddingBottom={3} fontSize={"2xl"} as="h1">{head}</Heading>
  )
}

export default Headding