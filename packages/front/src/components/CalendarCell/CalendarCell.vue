<template>
  <div id="calendar-cell">
    <Mission/>
  </div>
</template>

<script>
import moment from 'moment'
import Mission from '../Mission/Mission.vue'

export default {
  name: 'CalendarCell',
  components: { Mission },
  props: {
    cellDate: {
      type: Object,
      default: () => moment(),
    },
  },
}
</script>
