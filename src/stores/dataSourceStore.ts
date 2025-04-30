import { create } from 'zustand'
import type DataSource from '../types/DataSource'

export const useDataSourceStore = create<DataSource>()((set) => ({
  src: 'http://localhost:3001/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph',
  params: [
    {
      name: 'tenant_id',
      defaultValue: '123',
      currentValue: '123',
    },
    {
      name: 'action_blueprint_id',
      defaultValue: 'bp_456',
      currentValue: 'bp_456',
    },
    {
      name: 'blueprint_version_id',
      defaultValue: 'bpv_123',
      currentValue: 'bpv_123',
    },
  ],

}))

/**
 * Update param currentValue
 * setParamCurrentValue: set((state, paramName, newCurrVal) => {
 *  let newParamsList = []
 *  state.params.forEach(param => {
 *    newParamsList.push(
 *      param.name === paramName ? (
 *        {
 *          ...param,
 *          currentValue: newCurrVal,
 *        }
 *      ) : param)
 *  })
 *  return newParamsList
 * })
 */
