import {mount} from '@vue/test-utils'
import App from '../../src/App'

describe('Component App', () => {
    const wrapper = mount(App)

    it('Display month navigation', () => {
        const monthNavigation = wrapper.findComponent({name: 'month-navigation'})
        expect(monthNavigation.exists()).toBe(true)
    })
})
