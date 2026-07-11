import type CardImage from "./card-image";

export default interface Card {
    id: number,
    name: string,
    level: boolean;
    def: string;
    atk: string;
    race: string,
    type: string,
    frameType: string,
    desc: string,
    ygoprodeck_url: string,
    attribute: string,
    linkmarkers: string;
    scale: string;
    card_images: CardImage[]
}