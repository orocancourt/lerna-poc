import { get } from 'lodash'
import { MISSION_STATUS_ASSIGNED } from '../../constants'

export default {
  assignedMissions: state => state.demands
                                  .map(demand => get(demand, 'missions'))
                                  .reduce((accumulator, missions) => accumulator.concat(missions), [])
                                  .filter(mission => get(mission, 'status') === MISSION_STATUS_ASSIGNED),
}
