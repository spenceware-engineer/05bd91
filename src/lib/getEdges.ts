import type ResEdge from '../types/Edge/ResEdge'

export default (edges: ResEdge[]) => {
  return edges.map((edge) => ({
    ...edge,
    id: `${edge.source}-${edge.target}`,
  }))
}
