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

  test('내용 길이가 100이 넘어가면 게시글을 등록할 수 없다.', () => {
    const wrapper = shallowMount(PostAddForm, {
      data() {
        return {
          contents: '11111111111111aaaaaaaa11111111111111aaaaaaaa11111111111111aaaaaaaa11111111111111aaaaaaaa11111111111111aaaaaaaa',
          // contents: '',
        }
      }
    })

    const contentsWarningText = wrapper.find('.validation-text.warning');
    console.log('contentsWarningText', contentsWarningText);
    console.log('contentsWarningText', contentsWarningText.html());

    expect(wrapper.exists()).toBeTruthy();

    const createButton = wrapper.find('.btn');
    console.log('createButton', createButton);

    expect(createButton.element.disabled).toBeTruthy();
  })
})