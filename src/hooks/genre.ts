import useData from "./data";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const useGenre = () =>  useData<Genre>('/genres');


export default useGenre;
