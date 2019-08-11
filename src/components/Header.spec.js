import { shallowMount } from '@vue/test-utils'
import Header from "./Header"

describe('Header.vue', () => {
    const wrapper = shallowMount(Header, {
        propsData: {
            size: "4"
        }
    })

    it('should mount header', () => {
        expect(wrapper).not.toBeNull()
        console.log(wrapper.html())
    })
})