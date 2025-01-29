import { Genre } from "@/request/Genre";
import { Platforms } from "@/request/Platforms";
export interface Games {
  id: number;
  slug: string;
  name: string;
  metacritic: number;
  background_image: string;
  platforms: { platform: Platforms; }[];
  genre: Genre;
  rating_top: number;
}
