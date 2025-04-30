import GlobalActionData from '.'

type GlobalActionDataStore = {
  data: GlobalActionData | null
  setGlobalActionData: (data: GlobalActionData) => void
}

export default GlobalActionDataStore
