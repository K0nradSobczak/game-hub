import useGames, { Games } from "@/hooks/games";
import { Button, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./game-card";

import { GameQuery } from "@/App";
import React from "react";
interface Props {
  gameQuery: GameQuery
}
function GameGrid({gameQuery}: Props) {
  const { data: games, error , isLoading, fetchNextPage, isFetchingNextPage } = useGames(gameQuery);
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
        {games?.pages.map((page) => (
          <React.Fragment>
            {page.results.map((g: Games) => (
              <GameCard key={g.id} game={g}/>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>Load more</Button>
    </>
  );
}

export default GameGrid;
