# month-navigation-vue
Vue component for month navigation with navigation arrows.

![](https://github.com/andrew-svirin/month-navigation-vue/blob/master/example/demo.gif)

## Installation
```
npm install month-navigation-vue --save
```

## Usage
```vue
<template>
  <month-navigation v-model="value" />
</template>

<script>
import MonthNavigation from 'month-navigation-vue'

export default {
  components: {
    MonthNavigation
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
import 'month-navigation-vue/dist/month-navigation-vue.css'
```

### Options

| Props | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| value | Date | null | Default selected date |
| months | Array | {} | Array of month names |
| backwardBoundValue | Date | null | Left bounded date when backward arrow will invisible. |
| forwardBoundValue | Date | null | Left bounded date when forward arrow will invisible. |