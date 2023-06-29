<template>
  <div class="contents">
    <h1 class="page-header">생성 페이지</h1>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text">
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" rows="10"></textarea>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>