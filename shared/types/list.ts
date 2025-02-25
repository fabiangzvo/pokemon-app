import type { Tab } from "./common";
import type { PokemonItem } from "./pokemon";

export interface ListProps {
  items: PokemonItem[];
  total: number;
  onLoadMoreItems: () => Promise<void>;
  currentTab: Tab;
  isLoading: boolean;
}
