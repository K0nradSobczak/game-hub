import useGames from "@/hooks/games";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./game-card";

import { GameQuery } from "@/App";
interface Props {
  gameQuery: GameQuery
}
function GameGrid({gameQuery}: Props) {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding="4px" gap="10px">
        {isLoading && skeletons.map((skeleton) => {
          return(
              <Skeleton key={skeleton}/>
          )
        })}
        {data?.results.map((g) => (
          <GameCard key={g.id} game={g}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
