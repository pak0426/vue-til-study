<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">{{ postItem.createdDate }}
      <i class="icon ion-md-create">
        <ion-icon name="create-outline" size="small"></ion-icon>
      </i>
      <i class="icon ion-md-create">
        <ion-icon name="trash-outline" size="small" @click="deleteItem"></ion-icon>
      </i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
import VueJwtDecode from "vue-jwt-decode";

export default {
  props: {
    postItem: {
      type: Object,
      require: true
    }
  },
  methods: {
    async deleteItem() {
      console.log('delete');
      const postData = {
        id: this.postItem.id,
        member_id: VueJwtDecode.decode(window.localStorage.getItem('accessToken').replace('Bearer ', '')).sub
      };
      console.log('postData', postData);

      try {
        const response = await deletePost(postData);
        console.log('response', response);
      }
      catch (e) {
        console.log('error', e);
      }
    }
  }
}
</script>


<style scoped>

</style>