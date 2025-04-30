type DynamicFieldConfig = {
  [key: string]: {
    selector_field: string
    payload_fields: {
      [key: string]: {
        type: string
        value: string
      }
    }
  }
}

export default DynamicFieldConfig
