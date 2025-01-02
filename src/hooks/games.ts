import useData from "./data";
import { Genre } from "./genre";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Games {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  platforms: {platform: Platform}[];
  genre: Genre;
}


const useGames = (selected: Genre | null) => useData<Games>('/games', {params: {genres: selected?.id}}, [selected?.id]);

export default useGames;