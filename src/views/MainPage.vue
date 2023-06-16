<template>
  <div>
    <h1>Main Page</h1>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index'

export default {
  methods: {
    async fetchData() {
      const response = await fetchPosts();
      console.log('data', response);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>

</style>