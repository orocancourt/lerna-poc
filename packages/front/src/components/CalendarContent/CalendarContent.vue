<template>
  <v-layout
    id="calendar-content"
    class="table-row"
    row>
    <v-flex
      class="table-column"
      xs3/>
    <v-flex
      v-for="day in numberOfDays"
      :key="day"
      class="table-column"
      xs2
      pa-0>
      <calendar-cell/>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import CalendarCell from '../CalendarCell/CalendarCell.vue'

export default {
  name: 'CalendarContent',
  components: { CalendarCell },
  props: {
    numberOfDays: {
      type: Number,
      default: 8,
    },
    numberOfPastDays: {
      type: Number,
      default: 2,
    },
  },
  computed: mapState(['currentDate']),
}
</script>

<style lang="scss" scoped>
</style>
