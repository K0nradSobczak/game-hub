import { HttpClient } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

interface GameDetails {
    id: number,
    slug: string,
    name: string,
    name_original: string,
    description: string,
}

const client = new HttpClient<GameDetails>('/games');


const useGameDetails = (id: number | string ) => {return useQuery({
  queryKey: ['gameDetails', id],
  queryFn: () => client.get(id),
  staleTime: ms('1d')
})}


export default useGameDetails;