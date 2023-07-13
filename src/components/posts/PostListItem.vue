<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">{{ postItem.createdDate | formatDate }}
      <i class="icon ion-md-create" @click="editItem">
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
      try {
        if (confirm('Are you want to delete it?')) {
          const response = await deletePost(this.postItem.id);
          this.$emit('refresh');
          console.log('response', response);
        }
      }
      catch (e) {
        console.log('error', e);
      }
    },
    editItem() {
      const postId = this.postItem.id;
      this.$router.push(`post/${postId}`);
    }
  },
  filters: {
    formatingDate: function(date) {
      if (!date) return;
      return date.substring(0,10);
    }
  }
}
</script>


<style scoped>

</style>