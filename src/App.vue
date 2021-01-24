<template>
  <div>
    <div class="example">
      <month-navigation
          v-model="value"
          :months="months"
          :forward-bound-value="forwardBoundValue"
          @change="onChangeMonthNavigation"
      ></month-navigation>
    </div>
    <div>Current value: {{ value }}</div>
  </div>
</template>

<script>
import MonthNavigation from '../lib/index.js'

export default {
  name: 'app',
  components: {
    MonthNavigation,
  },
  data: () => ({
    value: new Date('1995-12-17T03:24:00'),
    forwardBoundValue: new Date('1995-12-17T03:24:00'),
    // forwardBoundValue: new Date('1996-02-17T03:24:00'),
  }),
  computed: {
    months: {
      get: function () {
        return [
          'Janvier',
          'Fevrier',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Aout',
          'Septembre',
          'Octobre',
          'Novembre',
          'Decembre'
        ]
      },
    },
  },
  methods: {
    onChangeMonthNavigation(value) {
      this.value = value;
    }
  }
}
</script>
