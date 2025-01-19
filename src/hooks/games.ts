import { GameQuery } from "@/App";
import { useData2 } from "./data";
import { Genre } from "./genre";
import { Platforms } from "./platforms";

export interface Games {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  platforms: { platform: Platforms }[];
  genre: Genre;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData2<Games>("/games", "games", {
    params: {
      genres: gameQuery.genres?.id,
      platforms: gameQuery.platforms?.id,
      ordering: gameQuery?.sortOrder,
      search: gameQuery?.search,
    },
  });

export default useGames;
