import { create } from 'zustand'
import type DataNode from '../types/DataNode'
import type DataNodesStore from '../types/stores/DataNodesStore'

export const useNodesStore = create<DataNodesStore>()((set) => ({
  nodes: [],
  setNodes: (newNodes: DataNode[]) => set({ nodes: newNodes }),
}))
