import { mount } from '@vue/test-utils'
import Header from "./Header"

describe('Header.vue', () => {
    const wrapper = mount(Header)

    it('should mount header', () => {
        // expect(header).t
        console.log(wrapper)
    })
})