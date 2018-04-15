<template>
  <section id="calendar">
    <div class="calendar-navigation">
      <v-btn
        class="calendar-navigation-button"
        icon
        @click="showPreviousMonth()">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <h1>{{ formattedCurrentDate }}</h1>
      <v-btn
        class="calendar-navigation-button"
        icon
        @click="showNextMonth()">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
    </div>
    <v-container
      class="table"
      text-xs-center
      pa-0>
      <calendar-days
        :current-date="currentDate"
        :number-of-days="numberOfDays"
        :number-of-past-days="numberOfPastDays"/>
      <calendar-content
        :number-of-days="numberOfDays"
        :number-of-past-days="numberOfPastDays"
      />
    </v-container>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import moment from 'moment'
  import CalendarDays from '../CalendarDays/CalendarDays.vue'
  import CalendarContent from '../CalendarContent/CalendarContent.vue'

  export default {
    name: 'Calendar',
    components: { CalendarDays, CalendarContent },
    data: () => ({
      numberOfDays: 8,
      numberOfPastDays: 2,
    }),
    computed: {
      formattedCurrentDate() {
        return this.formatDate(this.currentDate)
      },
      // currentDate() {
      //   console.log('current date called')
      //
      //   if (this.$store) {
      //     return this.$store.state.currentDate
      //   }
      //   return moment()
      // },
      ...mapState(['currentDate']),
    },
    methods: {
      formatDate(date) {
        return date.locale('fr').format('MMMM YYYY')
      },
      showPreviousMonth() {
        this.currentDate = moment(this.currentDate).subtract(1, 'month')
      },
      showNextMonth() {
        this.currentDate = moment(this.currentDate).add(1, 'month')
      },
    },
  }
</script>

<style lang="scss">
  $navigationButtonSize: 24px;

  section {
    height: 100%;
    padding: 20px;
    background-color: $sandGrey;
  }

  .calendar-navigation {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .calendar-navigation-button {
      width: $navigationButtonSize;
      height: $navigationButtonSize;
      margin: 0;
      color: $lightBlue;
    }

    h1 {
      width: 224px;
      padding: 10px;
      font-size: 28px;
      font-weight: normal;
      color: $darkBlue;

      &:first-letter {
        text-transform: capitalize;
      }
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    min-height: 70%;
    margin: 10px 0;
    background-color: white;

    .table-row {
      border-bottom: 1px solid $sandGrey;

      &:last-child {
        border-bottom: none;
      }

      .table-column {
        border-left: 1px solid $sandGrey;

        &:first-child {
          border-left: none;
        }
      }
    }
  }
</style>
