<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from "vue";
import userService from "@/services/user";
import UserCard from "@/components/UserCard/UserCard.vue";

const userData = ref([]);

async function getData() {
  const { data } = await userService.getUser();
  console.log(data);
  Object.assign(userData.value, data);
  console.log(userData.value, "userData");
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="container">
    <UserCard v-for="data in userData" :dataUser="data" :key="data._id" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply grid grid-cols-4 gap-[20px];
}
</style>
