import { defineStore } from 'pinia'

export const useMyCardStoreStore = defineStore({
  id: 'myCardStoreStore',
  state: () => ({
    cardList: []
  }),
  getters: {
    paginated: (state) => {
      return (limit: number, offset: number): any => state.cardList.slice(offset, limit);
    },

    hasCards: (state) => {
      return state.cardList.length > 0;
    }
  },
  actions: {
  }
})
