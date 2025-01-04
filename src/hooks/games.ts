import { GameQuery } from "@/App";
import useData from "./data";
import { Genre } from "./genre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  platforms: { platform: Platform }[];
  genre: Genre;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    { params: { genres: gameQuery.genres?.id, platforms: gameQuery.platforms?.id } },
    [gameQuery]
  );

export default useGames;
