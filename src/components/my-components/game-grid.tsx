import useGames from "@/hooks/games";
import { Games } from "@/request/Game";
import { SimpleGrid, Skeleton, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./game-card";


function GameGrid() {

  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();
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
            <React.Fragment key={page.next}>
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
