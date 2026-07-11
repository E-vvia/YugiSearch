import type CardInfoRequest from '#shared/types/ygpro/requests/cardinfo-request';
import type CardInfoResponse from '#shared/types/ygpro/responses/cardinfo-response';
import type Card from '#shared/types/ygpro/responses/card';
import { FetchError } from 'ofetch'

const api_endpoint = 'https://db.ygoprodeck.com/api/v7/';
const cardinfo = 'cardinfo.php';
const randomcard = 'randomcard.php.';
const cardsets = 'cardsets.php';
const cardsetinfo = 'cardsetsinfo.php';
const archetypes = 'archetypes.php';
const checkdbver = 'checkDBVer';

function buildPath<T extends object>(path: string, query: T): string {
    const params = new URLSearchParams()

    for (const [key, value] of Object.entries(query)) {
        if (value != null) {
            params.append(key, String(value))
        }
    }

    const search = params.toString()
    return search ? `${path}?${search}` : path
}

async function getCardInfo(request: CardInfoRequest): Promise<Card[]> {
    const url = buildPath(`${api_endpoint}${cardinfo}`, request)
    try {
        const response = await $fetch<CardInfoResponse>(url)
        return response.data;
    } catch (error) {
        if (error instanceof FetchError) {
            throw error;
        } else {
            throw createError({
                statusCode: 503,
                statusMessage: 'Service Unavailable',
                message: 'The service is temporarily unavailable. Please try again later.',
            })
        }
    }
}

const ygproApiClient = { getCardInfo };

export default ygproApiClient;