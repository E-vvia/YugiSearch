import type { CardPrice } from "./card-price";
import type { CardSet } from "./card-set";
import type { Misc } from "./misc";

export interface Card {
    id: number,
    name: string,
    type: string,
    frameType: string,
    desc: string,
    ygoprodeck_url: string,
    archetype : string | undefined,
    card_sets : CardSet[],
    card_prices : CardPrice[],
    misc_info : Misc[]
}