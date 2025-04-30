import { create } from 'zustand'
import type GlobalActionData from '../types/GlobalActionData'
import type GlobalActionDataStore from '../types/stores/GlobalActionDataStore'

export const useGlobalActionDataStore = create<GlobalActionDataStore>()(
  (set) => ({
    data: null,
    setGlobalActionData: (data: GlobalActionData) => set({ data }),
  }),
)
