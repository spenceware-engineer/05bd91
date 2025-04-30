import type GlobalActionData from '../types/GlobalActionData'

export default (data: any) => {
  let globalActionData: GlobalActionData = {}
  Object.entries(data).forEach((dataEntry: [string, any]) => {
    if (dataEntry[0] !== '$schema' && !Array.isArray(dataEntry[1])) {
      globalActionData[dataEntry[0]] = dataEntry[1]
    }
  })
  return globalActionData
}
