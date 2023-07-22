import PostAddForm from '@/components/posts/PostAddForm.vue';
import { shallowMount } from '@vue/test-utils';

describe('PostAddForm.vue', () => {
  test('게시글 작성 시 제목은 필수 요소이다.', () => {
    const wrapper = shallowMount(PostAddForm, {
      data() {
        return {
          title: ''
        }
      },
    })

    const createButton = wrapper.find('.btn');
    console.log('createButton', createButton);

    expect(createButton.element.disabled).toBeTruthy();
  })
})