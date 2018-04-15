import moment from 'moment'
import {
  SET_DEMANDS,
  SET_STATUS,
  CURRENT_DATE_ADD_DAY,
  CURRENT_DATE_ADD_MONTH,
  CURRENT_DATE_REMOVE_DAY,
  CURRENT_DATE_REMOVE_MONTH,
} from './mutation-types'

export default {
  [SET_DEMANDS](state, demands) {
    state.demands = demands
  },
  [SET_STATUS](state, { status }) {
    state.status = status
  },
  [CURRENT_DATE_ADD_DAY](state) {
    state.currentDate = moment(state.currentDate).add(1, 'day')
  },
  [CURRENT_DATE_ADD_MONTH](state) {
    state.currentDate = moment(state.currentDate).add(1, 'month')
  },
  [CURRENT_DATE_REMOVE_DAY](state) {
    state.currentDate = moment(state.currentDate).subtract(1, 'day')
  },
  [CURRENT_DATE_REMOVE_MONTH](state) {
    state.currentDate = moment(state.currentDate).subtract(1, 'month')
  },
}
