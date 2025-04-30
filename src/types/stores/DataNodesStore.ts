import DataNode from '../DataNode'

type DataNodesStore = {
  nodes: DataNode[]
  setNodes: (newNodes: DataNode[]) => void
}

export default DataNodesStore
