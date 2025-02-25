import type { PokemonItem } from "./pokemon";

export interface ListItemProps {
  item: PokemonItem;
}

export type handleFavoriteEmit = {
  (event: "handleFavorite", value: PokemonItem): void;
};
