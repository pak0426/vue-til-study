<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">{{ postItem.createdDate }}
      <i class="icon ion-md-create">
        <ion-icon name="create-outline"></ion-icon>
      </i>
      <i class="icon ion-md-create">
        <ion-icon name="trash-outline" @click="deleteItem"></ion-icon>
      </i>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      require: true
    }
  },
  methods: {
    deleteItem() {
      console.log('delete');
    }
  }
}
</script>


<style scoped>

</style>