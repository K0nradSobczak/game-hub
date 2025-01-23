import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  search?: string;
}

interface GameStorage {
  gameQuery: GameQuery;
  setGenre: (id: number) => void;
  setPlatform: (id: number) => void;
  searchGame: (search: string) => void;
  sortedBy: (sortOrder: string) => void;
}


const storeGames = create<GameStorage>((set) => ({
  gameQuery: {},
  setGenre: (genre: number) => set((store) => ({ gameQuery: {...store.gameQuery,genreId:  genre} })),
  setPlatform: (platform: number) =>
    set((store) => ({ gameQuery: {...store.gameQuery,platformId: platform} })),
  searchGame: (searchingWord: string) =>
    set((store) => ({ gameQuery: {...store.gameQuery, search: searchingWord } })),
  sortedBy: (order: string) => set((store) => ({ gameQuery: {...store.gameQuery, sortOrder: order } })),
}));

if (process.env.NODE_ENV == 'development') mountStoreDevtool('Count', storeGames);

export default storeGames;