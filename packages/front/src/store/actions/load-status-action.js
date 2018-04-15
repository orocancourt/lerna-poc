import { SET_STATUS } from '../mutations/mutation-types'
import apiService from '../../services/api-service'

export async function loadStatus({ commit }) {
  const response = await apiService.get('status')
  commit(SET_STATUS, { status: response })
}

export default {
  loadStatus,
}
