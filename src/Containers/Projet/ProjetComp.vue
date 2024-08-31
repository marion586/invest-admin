<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from "vue";
import projectService from "@/services/project";
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";

const projectData = ref([]);
const postuledData = ref([]);

async function getData() {
  const { data } = await projectService.getProject();
  console.log(data);
  Object.assign(projectData.value, data);
  postuledData.value = data.filter((item) => item.isPotuled);
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="container" v-if="projectData.length">
    <ProjectCard v-for="data in projectData" :DataCard="data" :key="data._id" />
  </div>
  <a-empty class="empty" description="donnée vide" v-else />
</template>

<style lang="scss" scoped>
.container {
  @apply grid grid-cols-3 gap-[20px];
}
.empty {
  margin-top: 80px;
}
</style>
