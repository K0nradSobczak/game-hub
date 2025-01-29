import storeGames  from "@/store/game-query";
import getAllRequest from "@/request/getAllRequest";
import { useInfiniteQuery } from "@tanstack/react-query";
import { HttpClient } from "@/services/api-client";
import ms from 'ms';
import Games  from "@/request/Game";

const client = new HttpClient<Games>("/games");
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
