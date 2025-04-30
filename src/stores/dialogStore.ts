import type DialogContent from '../types/stores/DialogContent'
import { create } from 'zustand'

export const useDialogStore = create((set) => ({
  open: false,
  dialogContent: null,
  setDialog: (content: DialogContent) => set({
    open: content ? true : false,
    dialogContent: content
  })
}))
