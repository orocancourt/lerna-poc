import getters from './getters'
import { MISSION_STATUS_ASSIGNED } from '../../constants'

describe('getters', () => {
  describe('assignedMissions', () => {
    it('returns a list of missions with `assigned` status', () => {
      // Given
      const state = {
        demands: [
          { missions: [ { status: 'in-progress' }, { status: 'assigned' } ] },
          { missions: [ { status: 'urgent' }, { status: 'assigned' } ] },
        ],
      }

      // When
      const assignedMissions = getters.assignedMissions(state)

      // Then
      expect(assignedMissions).toHaveLength(2)
      expect(assignedMissions.every(mission => mission.status === MISSION_STATUS_ASSIGNED)).toBeTruthy()
    })
  })
})
