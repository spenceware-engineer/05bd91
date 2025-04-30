import InputMapping from './InputMapping'
import SLADuration from './SLADuration'

type Data = {
  id: string
  component_key: string
  component_type: string
  component_id: string
  name: string
  prerequisites: string[]
  permitted_roles: string[]
  input_mapping: InputMapping
  sla_duration: SLADuration
  approval_required: boolean
  approval_roles: string[]
}

export default Data
