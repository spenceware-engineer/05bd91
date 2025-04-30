import DynamicFieldConfig from './DynamicFieldConfig'
import FieldSchema from './FieldSchema'
import UISchema from './UISchema'

type Form = {
  id: string
  name: string
  description: string
  is_reusable: boolean
  field_schema: FieldSchema
  ui_schema: UISchema
  dynamic_field_config: DynamicFieldConfig
}

export default Form
