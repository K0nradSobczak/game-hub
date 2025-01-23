import useGenre, { Genre } from "@/hooks/genre";
import getCroppedImage from "@/services/images";
import storeGames  from "@/store/game-query";
import {
  HStack,
  List,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

function GenreList() {
  const { data, error, isLoading } = useGenre();
  const genreId = storeGames(s => s.gameQuery.genreId);
  const setGenre = storeGames(s => s.setGenre);
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Heading fontSize={"2xl"} marginLeft={1}>
        Genres
      </Heading>
      <List.Root variant="plain" paddingX={0} paddingY={5}>
        {data?.results.map((g: Genre) => (
          <List.Item key={g.id} paddingY={"5px"}>
            <HStack paddingStart={1} alignItems={"center"} paddingRight={1}>
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                onClick={() => setGenre(g.id)}
                variant={"ghost"}
                padding={0}
                colorPalette={genreId === g.id ? "green" : "gray"}
                width={"100%"}
                justifyContent={"flex-start"}
              >
                <Image
                  boxSize="32px"
                  objectFit={"cover"}
                  src={getCroppedImage(g.image_background)}
                  borderRadius="70%"
                />
                <Text fontSize={"xl"}>{g.name}</Text>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GenreList;
