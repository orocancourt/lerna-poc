import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import moment from 'moment'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import { env } from '../env/env'

Vue.use(Vuex)

export const state = {
  demands: [],
  status: {},
  currentDate: moment(),
}

export default new Store({
  actions,
  mutations,
  state,
  strict: env('NODE_ENV') !== 'production',
})
