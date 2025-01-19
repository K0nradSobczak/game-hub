
import  {  useData2 } from "./data";


export interface Platforms {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useQuery({
//     queryKey: ['platforms'],
//     queryFn: () =>
//         ApiClient
//             .get<getAllRequest<Platforms>>('/platforms/lists/parents')
//             .then(res => res.data),
//     staleTime: 24 * 60 * 60 * 1000 //24 h
// })
// const usePlatforms = () =>  useData<Platforms>('/platforms/lists/parents');
const usePlatforms = () => useData2<Platforms>('/platforms/lists/parents', 'platforms');
export default usePlatforms;