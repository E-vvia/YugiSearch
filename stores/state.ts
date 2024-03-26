import { defineStore } from 'pinia'

export const useMyStateStore = defineStore({
  id: 'myStateStore',
  state: () => ({ 
    pageEnd: false as boolean
  }),
})
