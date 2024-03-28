import type { MonsterCard } from "./monster-card";

export interface LinkMonsterCard extends MonsterCard{
    linkval : number,
    linkmarkers: string,
}