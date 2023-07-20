import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/SignupForm.vue';

describe('SignupForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        return {
          email: 'abc',
          password: '',
          nickname: ''
        }
      }
    });

    const waringText = wrapper.find('.warning');
    console.log('waringText', waringText.html());
    expect(waringText.exists()).toBeTruthy();
  });
})