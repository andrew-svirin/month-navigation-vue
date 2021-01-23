<template>
  <div class="month-navigator__container">
    <button
        type="button"
        @click="onMinusMonthButton()"
    >
      &lsaquo;
    </button>
    <p>
      {{ currentMonth }} {{ currentYear }}
    </p>
    <button
        type="button"
        @click="onPlusMonthButton()"
    >
      &rsaquo;
    </button>
  </div>
</template>
<script>
export default {
  name: 'month-navigator',

  emits: [
    'change',
  ],

  data: () => ({
    currentMonth: 'O1',
    currentYear: 'O2',
  }),

  methods: {
    onMinusMonthButton() {
      this.$emit('change', 'ok')
    },
    onPlusMonthButton() {
      this.$emit('change', 'ok')
    },
  }
}
</script>

<style>
.month-navigator__container {
  width: 400px;
  position: relative;
  border: 1px solid #DDDDDD;
  border-radius: 5px;
}
</style>