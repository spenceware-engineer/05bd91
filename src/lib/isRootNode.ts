import type Data from '../types/DataNode/Data'

export default (node: Data) => {
  return !!node.prerequisites.length
}
