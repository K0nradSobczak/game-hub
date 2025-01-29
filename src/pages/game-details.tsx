import ExpandableText from "@/components/my-components/expandable-text";
import GameAttributes from "@/components/my-components/game-attributes";
import Screenshots from "@/components/my-components/screenshots";
import Video from "@/components/my-components/video";
import useGameDetails from "@/hooks/game-data";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
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
    <Box padding={4}>

      <SimpleGrid columns={{sm: 1,lg: 2}} spaceX={3} spaceY={10}>
        <GridItem colSpan={{lg: 1}}>
          <Heading  size={"2xl"}>{gameDetails?.name_original}</Heading>
          <ExpandableText children={formatedDescription} limit={200}/>
          <GameAttributes gameDetails={gameDetails}/>
        </GridItem>
        <GridItem colSpan={{lg: 1}}>
          <Video id={gameDetails?.id!}/>
          <Screenshots id={gameDetails?.id!} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export default GameDetails;
