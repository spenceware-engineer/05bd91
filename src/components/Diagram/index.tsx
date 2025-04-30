import { Background, Controls, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import styles from './diagram.module.css'
import { useNodesStore } from '../../stores/nodesStore'
import { useEdgesStore } from '../../stores/edgesStore'
import FormNode from './FormNode'

const nodeTypes = { form: FormNode }

export default () => {
  const nodes = useNodesStore((state) => state.nodes)
  const edges = useEdgesStore((state) => state.edges)

  return (
    <div className={styles.container}>
      <ReactFlow nodes={nodes} edges={edges} fitView nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
