<template>
  <div class="month-navigation__container">
    <div class="button-container">
      <button
          v-show="displayBackward"
          class="chevron left"
          type="button"
          @click="onMinusMonthButton()"
      >
        &lsaquo;
      </button>
    </div>
    <p v-if="date">
      {{ monthValue(date) }} {{ yearValue(date) }}
    </p>
    <div class="button-container">
      <button
          v-show="displayForward"
          class="chevron right"
          type="button"
          @click="onPlusMonthButton()"
      >
        &rsaquo;
      </button>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  name: 'month-navigation',

  props: {
    value: {
      type: [Object, Date],
      default: () => {
        return {}
      },
    },
    backwardBoundValue: {
      type: [Object, Date],
      default: null,
    },
    forwardBoundValue: {
      type: [Object, Date],
      default: null,
    },
    months: {
      type: Array,
      default() {
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
      }
    },
  },

  emits: [
    'change',
  ],

  data: () => ({
    date: null,
    displayBackward: true,
    displayForward: true,
  }),

  mounted() {
    this.init()
  },

  methods: {
    init() {
      this.date = this.value || new Date()
    },
    onChange() {
      // Check to display backward.
      if (_.isDate(this.backwardBoundValue)) {
        this.displayBackward = this.backwardBoundValue.getTime() < this.date.getTime()
      }
      // Check to display forward.
      if (_.isDate(this.forwardBoundValue)) {
        this.displayForward = this.forwardBoundValue.getTime() > this.date.getTime()
      }
      this.$emit('change', this.date)
    },
    onMinusMonthButton() {
      this.date = new Date(this.date.setMonth(this.date.getMonth() - 1));
      this.onChange()
    },
    onPlusMonthButton() {
      this.date = new Date(this.date.setMonth(this.date.getMonth() + 1));
      this.onChange()
    },
    monthValue(date) {
      return this.months[date.getMonth()]
    },
    yearValue(date) {
      return date.getFullYear()
    },
  }
}
</script>

<style lang="scss">
$link-color: #409eff;
.month-navigation__container {
  color: #606266;
  font-size: 1.4rem;
  border: 1px solid #dcdfe6;
  background: linear-gradient(#f4f5f8, #f1f3f6);
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    padding: 0 1em;
    margin: 1em 0;
    width: 190px;
    text-align: center;
  }

  > .button-container {
    width: 24px;
    display: block;

    > button {
      border: none;
      background: transparent;
      cursor: pointer;
      font-size: 0px;
    }
  }

  .chevron {
    width: 24px;
    height: 24px;
    border-radius: 15%;
    position: relative;
    margin: 0;
    display: inline-block;
    vertical-align: middle;

    &:after {
      content: '';
      position: absolute;
      display: block;
      left: 50%;
      top: 50%;
      margin-top: -6px;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
    }

    &.left::after {
      border-right: 6px solid $link-color;
      margin-left: -3px;
    }

    &.right::after {
      border-left: 6px solid $link-color;
      margin-left: -3px;
    }
  }
}
</style>