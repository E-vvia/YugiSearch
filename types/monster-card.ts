import type { Card } from "./card";

export interface MonsterCard extends Card {
    atk : number,
    def: number,
    level: number,
    race: string,
    attribute: string
}