import type CardInfoRequest from '#shared/types/ygpro/requests/cardinfo-request';
export default defineCachedEventHandler(async (event) => {
    const query = getQuery<CardInfoRequest>(event);
    return await ygproApiClient.getCardInfo(query);
}, {
    maxAge: 172800
});