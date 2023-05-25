<template>
  <form>
    <div>
      <label for="username">id: </label>
      <input id="username" type="text">
    </div>
    <div>
      <label for="password">password: </label>
      <input id="password" type="text">
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  name: "SignupForm"
};
</script>

<style scoped>

</style>