import { mount } from '@vue/test-utils'
import ChatieLogo from '@/components/ChatieLogo.vue'

describe('Chatie Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ChatieLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
