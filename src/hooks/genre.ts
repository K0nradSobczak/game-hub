import {  useData2 } from "./data";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenre = () => useData2<Genre>('/genres', 'genre');

export default useGenre;
