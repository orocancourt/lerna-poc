<template>
  <v-layout
    id="calendar-days"
    class="table-row"
    row>
    <v-flex
      class="table-column"
      xs3/>
    <v-btn
      class="calendar-navigation-button"
      icon
      @click="showPreviousDay()">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-flex
      v-for="(day, index) in days"
      :key="index"
      class="table-column calendar-day"
      xs2
      pa-0>
      <div
        :class="{
          'current-date': day.isCurrentDate,
          'today': day.isToday,
          'past-day': day.isPastDay,
          'future-day': day.isFutureDay,
        }"
        class="calendar-day-button">
        <span class="calendar-day-button-text">
          <span class="calendar-day-button-text-digit">{{ day.digit }}</span>
          <span class="calendar-day-button-text-weekday">{{ day.weekday }}</span>
        </span>
        <span
          v-if="day.isCurrentDate"
          class="calendar-day-button-underline"/>
      </div>
    </v-flex>
    <v-btn
      class="calendar-navigation-button"
      icon
      @click="showNextDay()">
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
  import moment, { Moment } from 'moment'
  import { times } from 'lodash'

  export default {
    name: 'CalendarDays',
    props: {
      currentDate: {
        type: Moment,
        default: () => moment(),
      },
      numberOfDays: {
        type: Number,
        default: 8,
      },
      numberOfPastDays: {
        type: Number,
        default: 2,
      },
    },
    computed: {
      today() {
        return moment()
      },
      startDate() {
        return moment(this.currentDate).subtract(this.numberOfPastDays, 'day')
      },
      days() {
        return times(this.numberOfDays, i => {
          const day = moment(this.startDate).add(i, 'day')
          return {
            digit: this.formatDayDigitFromDate(day),
            weekday: this.formatWeekdayFromDate(day),
            isCurrentDate: this.isCurrentDate(day),
            isToday: this.isToday(day),
            isPastDay: this.isPastDay(day),
            isFutureDay: this.isFutureDay(day),
          }
        })
      },
    },
    methods: {
      formatDayDigitFromDate(date) {
        return date.locale('fr').format('D')
      },
      formatWeekdayFromDate(date) {
        return date.locale('fr').format('ddd').slice(0, -1)
      },
      isCurrentDate(date) {
        return date.isSame(this.currentDate, 'day')
      },
      isToday(date) {
        return date.isSame(this.today, 'day')
      },
      isPastDay(date) {
        return date.isBefore(this.today, 'day')
      },
      isFutureDay(date) {
        return date.isAfter(this.today, 'day')
      },
      showPreviousDay() {
        this.currentDate = moment(this.currentDate).subtract(1, 'day')
      },
      showNextDay() {
        this.currentDate = moment(this.currentDate).add(1, 'day')
      },
    },
  }
</script>

<style lang="scss" scoped>
  $rowHeight: 90px;
  $underlineHeight: 4px;
  $navigationButtonSize: 24px;
  $navigationButtonMarginY: ($rowHeight - $navigationButtonSize) / 2;

  .table-row {
    position: sticky;
    top: 70px;
    min-height: $rowHeight;
    max-height: $rowHeight;
  }

  .calendar-navigation-button {
    position: absolute;
    width: $navigationButtonSize;
    height: $navigationButtonSize;
    margin: $navigationButtonMarginY 0;
    color: $lightBlue;

    &:first-of-type {
      left: 15%;
      margin-left: 9px;
      margin-right: 9px;
    }

    &:last-of-type {
      right: 0;
    }
  }

  .calendar-day {
    display: flex;
    flex-direction: column;

    .calendar-day-button {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: stretch;
      justify-content: center;

      &.today {
        color: $lightBlue;
        background-color: $lightBlue;
      }
      &.past-day {
        color: $grey;
        background-color: $grey;
      }
      &.future-day {
        color: $darkBlue;
        background-color: $darkBlue;
      }
      &.current-date > span {
        margin-bottom: -$underlineHeight / 2;
      }

      .calendar-day-button-text {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        background-color: white;

        .calendar-day-button-text-digit {
          font-size: 36px;
        }
        .calendar-day-button-text-weekday {
          font-size: 16px;
          margin-top: -10px;
        }
      }

      .calendar-day-button-underline {
        width: 60%;
        height: $underlineHeight;
        margin: 0 auto;
        z-index: 1;
        background-color: inherit;
      }
    }
  }
</style>
