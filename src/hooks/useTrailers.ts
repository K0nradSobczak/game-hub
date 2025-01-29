import { GameTrailers } from "@/request/TrailerList";
import { HttpClient } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";


const useTrailers = (id: string | number) => {
  const client = new HttpClient<GameTrailers>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["trailers", id],
    queryFn: client.getAll,
    staleTime: ms("1d"),
  });
};

export default useTrailers;
