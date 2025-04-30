import Form from '.'

type FormsStore = {
  forms: Form[]
  setForms: (newForms: Form[]) => void
}

export default FormsStore
