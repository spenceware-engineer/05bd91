import type Edge from '../Edge'

type EdgesStore = {
  edges: Edge[]
  setEdges: (newEdges: Edge[]) => void
}

export default EdgesStore
