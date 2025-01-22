import {  useData2 } from "./data";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenre = () => useData2<Genre>('/genres', 'genre');
export const findGenre = (id: number | null) =>{
  const {data} = useGenre();
    return data?.results.find(p => p?.id === id)
}
export default useGenre;
