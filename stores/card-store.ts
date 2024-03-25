import { defineStore } from 'pinia'

export const useMyCardStore = defineStore({
  id: 'myCardStoreStore',
  state: () => ({
    cardList: [],
  }),

  getters: {
    paginated: (state) => {
      return (limit: number, offset: number): any => state.cardList.slice(offset, limit);
    },

    hasCards: (state) => {
      return state.cardList.length > 0;
    },
    
  },

  actions:{
    async fetchCards(queryParams: any) {
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
    
        const searchResults = await $fetch<any>('/api/v7/cardinfo.php?' + params.toString());
        this.cardList = searchResults.data;
    
      } catch (error: any) {
    
        console.error("Error at fetching request");
    
      }
    }
  }
})
