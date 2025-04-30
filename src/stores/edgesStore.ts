import { create } from 'zustand'
import type Edge from '../types/Edge'
import type EdgesStore from '../types/stores/EdgesStore'

export const useEdgesStore = create<EdgesStore>()((set) => ({
  edges: [],
  setEdges: (newEdges: Edge[]) => set({ edges: newEdges }),
}))
