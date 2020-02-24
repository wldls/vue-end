import { shallowMount } from '@vue/test-utils';
import { SignupForm } from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('메일주소가 유효한지 확인', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });

    const txtError = wrapper.find('.txt-err');
    // const button = wrapper.find('button');

    expect(txtError.exists()).toBeTruthy();
    // expect(button.element.disabled).toBeTruthy();
  });
});
