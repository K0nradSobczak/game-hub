import {  useData2 } from "./data";
import { Genre } from "../request/Genre";

const useGenre = () => useData2<Genre>('/genres', 'genre');
export const findGenre = (id: number | undefined) =>{
  const {data} = useGenre();
    return data?.results.find(p => p?.id === id)
}
export default useGenre;
