import storeGames  from "@/store/game-query";
import { getAllRequest} from "./data";
import { Genre } from "./genre";
import { Platforms } from "./platforms";
import { useInfiniteQuery } from "@tanstack/react-query";
import { HttpClient } from "@/services/api-client";
import ms from 'ms';

const client = new HttpClient<Games>("/games");
export interface Games {
  id: number;
  slug: string;
  name: string;
  metacritic: number;
  background_image: string;
  platforms: { platform: Platforms }[];
  genre: Genre;
  rating_top: number;
}



const useGames = () => {
  const gameQuery  = storeGames(s => s.gameQuery);
 return useInfiniteQuery<getAllRequest<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      client.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.search,
          page: pageParam,
        },
      }),
    staleTime: ms('1d'),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });
};

export default useGames;
