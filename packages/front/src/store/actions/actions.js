import {
  CURRENT_DATE_ADD_DAY,
  CURRENT_DATE_ADD_MONTH,
  CURRENT_DATE_REMOVE_DAY,
  CURRENT_DATE_REMOVE_MONTH,
  LOAD_DEMANDS,
  LOAD_STATUS,
} from './action-types'
import { loadDemands } from './load-demands-action'
import { loadStatus } from './load-status-action'
import {
  addDay,
  addMonth,
  removeDay,
  removeMonth,
} from './update-current-date-action'

export default {
  [LOAD_STATUS]: loadStatus,
  [LOAD_DEMANDS]: loadDemands,
  [CURRENT_DATE_ADD_DAY]: addDay,
  [CURRENT_DATE_ADD_MONTH]: addMonth,
  [CURRENT_DATE_REMOVE_DAY]: removeDay,
  [CURRENT_DATE_REMOVE_MONTH]: removeMonth,
}
