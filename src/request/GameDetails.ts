import { Genre } from "./Genre";
import { Platforms } from "./Platforms";
import { Publishers } from "./Publisher";

export interface GameDetails {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  parent_platforms: {platform: Platforms}[];
  metacritic: number;
  genres: Genre[];
  publishers: Publishers[];
}
