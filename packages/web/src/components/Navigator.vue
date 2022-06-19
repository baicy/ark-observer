<script lang="ts" setup>
</script>

<template>
<nav>
    <router-link to="/" active-class="is-active"><button>Home</button></router-link>
    <router-link to="/lvlmax" active-class="is-active"><button>满级图生成</button></router-link>
  </nav>
</template>

<style scoped>
nav button {
  border: 2px solid transparent;
  background-color: #fff;
  color: #000;
  cursor: pointer;
}
nav button:hover, nav .is-active button {
  border-bottom: 2px solid #000;
}
</style>