import useGameDetails from "@/hooks/game-data";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { htmlToText } from "html-to-text";
import { useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const {data: gameDetails, isLoading, error} = useGameDetails(id!);
  const desc: string | undefined = gameDetails?.description;;
  if (isLoading) return <Spinner/>
  if (error) throw new Error(error.message);
  return (
    <Box>
      <Heading size={"2xl"}>{gameDetails?.name_original}</Heading>
      <Text>
        {desc
          ? htmlToText(desc, {
              wordwrap: 130,
            })
          : <Spinner/>}
      </Text>
    </Box>
  );
}

export default GameDetails;
