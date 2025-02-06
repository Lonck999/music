<script setup>
import notFound from "../../public/assets/img/not-found.jpg";
</script>
<template>
  <div>
    <img :src="notFound" alt="not-found" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
