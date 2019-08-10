import { mount } from '@vue/test-utils'
import Header from "./Header"

describe('Header.vue', () => {
    const wrapper = mount(Header)

    it('should mount header', () => {
        expect(wrapper).not.toBeNull()
        console.log(wrapper)
    })
})