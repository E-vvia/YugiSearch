import { defineStore } from 'pinia'
import type { ApiResponse } from '~/types/api-response';
import type { Card } from '~/types/card';
import type { QuerySchema } from '~/types/query';

export const useMyCardStore = defineStore({
  id: 'myCardStoreStore',
  state: () => ({
    cardList: [] as Card[],
  }),

  getters: {
    paginated: (state) => {
      return (limit: number, offset: number): any => state.cardList.slice(offset, limit);
    },

    hasCards: (state) => {
      return state.cardList.length > 0;
    },

  },

  actions: {
    async fetchCards(queryParams: QuerySchema) {
      if (!queryParams.query) {
        this.cardList = [];
        return;
      }

      const apiQueryParams = {
        fname: queryParams.query as string,
        misc: 'yes'
      }

      const params = new URLSearchParams(apiQueryParams);
      try {
        const searchResults = await $fetch<ApiResponse>('/api/v7/cardinfo.php?' + params.toString());
        this.cardList = searchResults.data.filter(c => c.frameType != 'skill');
      } catch (ex) {
        this.cardList = [];
        throw ex;
      }

    }
  }
})
