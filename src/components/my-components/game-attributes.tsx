import { SimpleGrid, Text } from "@chakra-ui/react"
import GameSection from "./game-section"
import Metacritic from "./metacritic"
import { GameDetails } from "@/request/GameDetails"
interface Props {
  gameDetails: GameDetails | undefined;
}

function GameAttributes({gameDetails}: Props) {

  return (
    <SimpleGrid columns={2} as="dl">
        <GameSection  term="Platforms">
          {gameDetails?.parent_platforms.map(({platform}) => (<Text key={platform.id}>{platform.name}</Text>))}
        </GameSection>
        <GameSection term="MetaCritics">
          <Metacritic critic={gameDetails?.metacritic!}/>
        </GameSection>
        <GameSection term="Genres">
          {gameDetails?.genres.map((genre) => (<Text key={genre.id}>{genre.name}</Text>))}
        </GameSection>
        <GameSection term="Publishers">
          {gameDetails?.publishers.map(p => (<Text key={p.id}>{p.name}</Text>))}
        </GameSection>
      </SimpleGrid>
  )
}

export default GameAttributes