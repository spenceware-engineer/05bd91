import { useNodesStore } from '@/stores/nodesStore'

export default (id: string) => {
  const nodes = useNodesStore((state) => state.nodes)
  for (const n of nodes) {
    if (n.data.prerequisites.includes(id)) return true
  }
  return false
}
