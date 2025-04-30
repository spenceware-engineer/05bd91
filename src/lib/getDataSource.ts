import type DataSource from '../types/DataSource'

export default (dataSource: DataSource) => {
  let source = dataSource.src
  dataSource.params.forEach((param) => {
    source = source.split(`{${param.name}}`).join(param.defaultValue)
  })
  return source
}
