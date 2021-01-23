# month-navigation-vue
Vue component for month navigation with navigation arrows.

## Installation
```
npm install month-navigation-vue --save
```

## Usage
```vue
<template>
  <vue-calendar v-model="value" />
</template>

<script>
import MonthNavigator from 'month-navigator-vue'

export default {
  components: {
    MonthNavigator
  },
  data () {
    return {
      value: null // Default selected date
    }
  }
}
</script>
```
Add styles for component to your project
```
import 'month-navigator-vue/dist/month-navigator-vue.css'
```

### Options

| Props | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| value | Date | null | Default selected date |