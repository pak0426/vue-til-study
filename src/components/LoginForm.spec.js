import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
// import Vue from 'vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅되면 username이 존재해야하고 초기값으로 세팅되어야 한다.', () => {
    // const instance = new Vue(LoginForm).$mount();
    // console.log('instance', instance.email);

    // vue test util 사용
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.email).toBe('');
  })
});

describe('LoginForm.vue', () => {
  test('ID는 이메일 형식이어야 한다.', () => {
    const wrapper = shallowMount(LoginForm);
    const inputEmail = wrapper.find('#email');
    console.log('inputEmail', inputEmail);
    console.log('inputEmail', inputEmail.html());
  })
})