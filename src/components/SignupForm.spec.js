import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          email: 'abc@a.com',
          password: '',
          nickname: ''
        }
      }
    });

    const waringText = wrapper.find('.warning');
    console.log('waringText', waringText.html());
    expect(waringText.exists()).toBeTruthy();
  });

  test('ID, PW, Nickname 이 입력되어야 회원가입 버튼이 활성화 된다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          email: 'a@a.com',
          password: '1234',
          nickname: ''
        }
      },
    })

    const signupButton = wrapper.find('.btn');
    console.log('signupButton', signupButton);
    console.log('signupButton', signupButton.html());

    expect(signupButton.element.disabled).toBeTruthy();
  })
})