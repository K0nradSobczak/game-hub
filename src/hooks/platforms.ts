import { useData2 } from "./data";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useData2<Platforms>("/platforms/lists/parents", "platforms");

export const findPlatform = (id: number | null) => {
    const {data} = usePlatforms();
    return data?.results.find(p => p?.id === id)
}

export default usePlatforms;
