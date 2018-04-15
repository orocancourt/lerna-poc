import {
  CURRENT_DATE_ADD_DAY,
  CURRENT_DATE_ADD_MONTH,
  CURRENT_DATE_REMOVE_DAY,
  CURRENT_DATE_REMOVE_MONTH,
} from '../mutations/mutation-types'

export async function addDay({ commit }) {
  commit(CURRENT_DATE_ADD_DAY)
}
export async function addMonth({ commit }) {
  commit(CURRENT_DATE_ADD_MONTH)
}
export async function removeDay({ commit }) {
  commit(CURRENT_DATE_REMOVE_DAY)
}
export async function removeMonth({ commit }) {
  commit(CURRENT_DATE_REMOVE_MONTH)
}

export default {
  addDay,
  addMonth,
  removeDay,
  removeMonth,
}
