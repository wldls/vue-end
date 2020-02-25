import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('메일주소가 유효하지 않으면 경고 문구가 생성된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          username: 'test',
          password: '',
        };
      },
    });

    const txtError = wrapper.find('.txt-err');
    const button = wrapper.find('button');

    expect(txtError.exists()).toBeTruthy();
    expect(button.element.disabled).toBeTruthy();
  });
});
