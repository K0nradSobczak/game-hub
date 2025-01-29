import ExpandableText from "@/components/my-components/expandable-text";
import GameAttributes from "@/components/my-components/game-attributes";
import useGameDetails from "@/hooks/game-data";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { htmlToText } from "html-to-text";
import { useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const { data: gameDetails, isLoading, error } = useGameDetails(id!);
  const desc: string | undefined = gameDetails?.description;

  const formatedDescription = desc
    ? htmlToText(desc, {
        wordwrap: 130,
      })
    : "lorem";

  if (isLoading) return <Spinner />;
  if (error) throw new Error(error.message);

  return (
    <Box padding={10}>
      <Heading size={"2xl"}>{gameDetails?.name_original}</Heading>
      <ExpandableText children={formatedDescription} limit={200}/>
      <GameAttributes gameDetails={gameDetails}/>
    </Box>
  );
}

export default GameDetails;
