import type { PokemonItem } from "./pokemon";

export type Tab = "all" | "favorites";

export interface BottomBarProps {
  tab: Tab;
}

export interface ApiResponse {
  results: [];
  count: number;
  next: string;
}

export interface SearchPageState {
  query: string;
  results: PokemonItem[];
  next: string;
  total: number;
  currentTab: Tab;
  isLoading: boolean;
}
