<template>
  <form>
    <div>
      <label for="email">id: </label>
      <input id="email" type="text">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm"
};
</script>

<style scoped>

</style>