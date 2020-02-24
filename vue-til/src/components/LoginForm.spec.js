import { shallowMount } from '@vue/test-utils';
// import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID가 이메일 형식이 아니면 경고 메시지가 출력된다.', () => {
    // ★사용자 관점에서의 테스트
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');

    expect(warningText.exists()).toBeTruthy();

    // const idInput = wrapper.find('#username');

    // console.log('인풋 박스의 값: ', idInput.element.value);
    // console.log(wrapper.vm.isUsernameValid);
  });

  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });

    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
  });

  /* test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
    // const instance = new Vue(LoginForm).$mount();
    // console.log(instance, instance.username);
    // expect(instance.username).toBe('');
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm.username).toBe('');
  }); */
});
