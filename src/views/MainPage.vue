<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem.id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <ion-icon name="add-outline"></ion-icon>
    </router-link>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/index'

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    }
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      console.log('data', data);

      this.postItems = data;
      this.isLoading = false;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>

</style>