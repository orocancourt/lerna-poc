import { SET_DEMANDS } from '../mutations/mutation-types'
import apiService from '../../services/api-service'

export async function loadDemands({ commit }) {
  const companyId = 'companyB'
  const response = await apiService.get(`companies/${companyId}/demands`)
  commit(SET_DEMANDS, { demands: response })
}

export default {
  loadDemands,
}
