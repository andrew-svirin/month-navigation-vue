<template>
  <div>
    <div class="example">
      <month-navigator @change="onChangeMonthNavigator"></month-navigator>
    </div>
    <div>Current value: {{ value }}</div>
  </div>
</template>

<script>
import MonthNavigator from '../lib/index.js'

export default {
  name: 'app',
  components: {
    MonthNavigator
  },
  data: () => ({
    value: null,
  }),
  methods: {
    onChangeMonthNavigator(value) {
      this.value = value;
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
