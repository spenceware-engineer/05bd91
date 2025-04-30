import type Position from './Position'
import type Data from './Data'

type DataNode = {
  id: string
  type: string
  position: Position
  data: Data
}

export default DataNode
