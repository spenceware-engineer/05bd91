import { create } from 'zustand'
import type Form from '../types/Form'
import type FormsStore from '../types/stores/FormsStore'

export const useFormsStore = create<FormsStore>()((set) => ({
  forms: [],
  setForms: (newForms: Form[]) => set({ forms: newForms }),
}))
