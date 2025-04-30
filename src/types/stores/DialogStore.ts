import type DialogContent from './DialogContent'

type DialogStore = {
  open: boolean
  dialogContent: DialogContent
  setDialog: (content: DialogContent) => void
}

export default DialogStore
