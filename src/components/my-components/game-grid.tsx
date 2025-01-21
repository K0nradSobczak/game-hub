import { GameQuery } from "@/App";
import useGames, { Games } from "@/hooks/games";
import { SimpleGrid, Skeleton, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./game-card";
interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const dataLenght =
    games?.pages.reduce((total, page) => (total += page.results.length), 0) ||
    0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={dataLenght}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="4px" gap="10px">
          {isLoading &&
            skeletons.map((skeleton) => {
              return <Skeleton key={skeleton} />;
            })}
          {games?.pages.map((page) => (
            <React.Fragment>
              {page.results.map((g: Games) => (
                <GameCard key={g.id} game={g} />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
