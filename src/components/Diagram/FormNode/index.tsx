import { Handle, Position } from '@xyflow/react'
import { Card, CardContent, Typography } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment'
import isRootNode from '../../../lib/isRootNode'
import isLeafNode from '../../../lib/isLeafNode'
import type FormNodeProps from '../../../types/Props/FormNodeProps'
import styles from './formNode.module.css'

export default ({ data, type }: FormNodeProps) => {
  return (
    <>
      {isRootNode(data) ? (
        <Handle type='target' position={Position.Left} />
      ) : null}
      {isLeafNode(data.component_key) ? (
        <Handle type='source' position={Position.Right} />
      ) : null}
      <Card sx={{ borderRadius: '20px', width: 275, cursor: 'pointer' }}>
        <CardContent className={styles.content}>
          <div className={styles.iconContainer}>
            <AssignmentIcon fontSize='large' sx={{ color: 'white' }} />
          </div>
          <div>
            <Typography
              gutterBottom
              sx={{
                color: 'text.secondary',
                fontSize: 14,
                textTransform: 'capitalize',
              }}
            >
              {type}
            </Typography>
            <Typography variant='h5' component='div'>
              {data.name}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
