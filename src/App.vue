<!-- App.vue -->
<template>
  <div class="row">
    <div class="col-12">
      <div id="nav">
        <router-link :to="{ name: 'Home' }" class="btn btn-info">
          Home
        </router-link>
        |
        <router-link :to="{ name: 'User' }" class="btn btn-info">
          User</router-link
        >
        |
        <router-link :to="{ name: 'CreateUser' }" class="btn btn-info">
          Create User</router-link
        >
      </div>
      <br>
    </div>
    <br>
    <div class="col-12 bg-light border p-3">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

