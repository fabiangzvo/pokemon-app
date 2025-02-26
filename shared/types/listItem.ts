import type { PokemonItem } from "./pokemon";

export interface ListItemProps {
  item: PokemonItem;
}

export type ListItemEmits = {
  (event: "handleClick", value: PokemonItem): void;
};
