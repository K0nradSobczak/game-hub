import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import { getAllRequest } from "./data";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenre =() => useQuery({
  queryKey: ["genre"],
  queryFn: () =>
    ApiClient
        .get<getAllRequest<Genre>>("/genres")
        .then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000 //24 h

});

export default useGenre;
