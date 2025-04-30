'use client'

import { useDataSourceStore } from '../../stores/dataSourceStore'
import getDataSource from '../../lib/getDataSource'
import styles from './DataSource.module.css'
import { Button, TextField } from '@mui/material'

export default () => {
  const dataSrcParams = useDataSourceStore((state) => state.params)
  const dataSrc = useDataSourceStore((state) =>
    getDataSource({ src: state.src, params: state.params }),
  )

  return (
    <div className={styles.dataSrcBar}>
      <div className={styles.dataSrcDisplay}>
        <TextField color='primary' label='Data Source' value={dataSrc} />
        <Button variant='text'>Change Data Source</Button>
      </div>
      <div className={styles.paramEditor}>
        {dataSrcParams.map((param) => (
          <TextField
            key={param.name}
            label={param.name}
            defaultValue={param.defaultValue}
          />
        ))}
      </div>
    </div>
  )
}
