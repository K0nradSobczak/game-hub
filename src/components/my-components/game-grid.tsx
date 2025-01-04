import useGames, { Platform } from "@/hooks/games";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./game-card";
import { Genre } from "@/hooks/genre";
interface Props {
  selected: Genre | null;
  selectedPlatform: Platform | null;
}
function GameGrid({selected, selectedPlatform}: Props) {
  const { errors, data, isLoading } = useGames(selected, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding="4px" gap="10px">
        {isLoading && skeletons.map((skeleton) => {
          return(
              <Skeleton key={skeleton}/>
          )
        })}
        {data.map((g) => (
          <GameCard key={g.id} game={g}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
