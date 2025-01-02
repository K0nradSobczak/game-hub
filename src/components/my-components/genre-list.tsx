import useGenre, { Genre } from "@/hooks/genre"
import getCroppedImage from "@/services/images";
import { HStack, List, Image, Text, Spinner, Button } from "@chakra-ui/react";

interface Props {
  changeGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({selectedGenre, changeGenre}: Props) {
  const {data, errors, isLoading} = useGenre()
  if (isLoading) return <Spinner/>
  return (
    <>
      {errors && <Text>{errors}</Text>}
    <List.Root variant="marker" paddingX={5} paddingY={5}>
      {data?.map(g =>(
        <List.Item key={g.id} paddingY={"5px"}>
        <HStack paddingRight={10} >
          <Button onClick={() => changeGenre(g)} variant={'ghost'} padding={0} colorPalette={selectedGenre?.id === g.id ? "green" : "gray"}>
            <Image boxSize="32px" src={getCroppedImage(g.image_background)}  borderRadius="70%" />
            <Text fontSize={"lg"} >{g.name}</Text>
          </Button>
        </HStack>
        </List.Item>
        ))}
    </List.Root>
    </>
  )
}

export default GenreList