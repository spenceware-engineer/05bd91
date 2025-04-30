import CircularProgress from '@mui/material/CircularProgress'
import styles from './diagram.module.css'

export default () => {
  return (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  )
}
