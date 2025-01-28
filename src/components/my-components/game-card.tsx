import { Games } from "@/hooks/games";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "@/components/my-components/platform-icon-list";
import Metacritic from "./metacritic";
import getCroppedImage from "@/services/images";
import Emoji from "./emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root _hover={{transform: 'scale(1.03)', transition: '.15s ease-in'}} borderRadius={10}>
      <Link to={'/game/' + game.slug}>
        <Card.Header >
          <Image src={getCroppedImage(game.background_image)}/>
        </Card.Header>
        <Card.Body>
          <HStack marginBottom={2} justifyContent={"space-between"}>
          <PlatformIconList platform={game.platforms.map(({platform}) => platform)}/>
          <Metacritic critic={game.metacritic}/>
          </HStack>
          <Text fontSize="2xl">{game.name} <Emoji rating={game.rating_top}/></Text>
        </Card.Body>
      </Link>
    </Card.Root>
  );
};

export default GameCard;
