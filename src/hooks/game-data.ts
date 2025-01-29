import { HttpClient } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameDetails } from "../request/GameDetails";

const client = new HttpClient<GameDetails>('/games');


const useGameDetails = (id: number | string ) => {return useQuery({
  queryKey: ['gameDetails', id],
  queryFn: () => client.get(id),
  staleTime: ms('1d')
})}


export default useGameDetails;