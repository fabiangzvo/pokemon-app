import type { Tab } from "./common";
import type { PokemonItem } from "./pokemon";

export interface ListProps {
  items: PokemonItem[];
  total: number;
  handleLoadMore?: () => Promise<void>;
  currentTab: Tab;
}
