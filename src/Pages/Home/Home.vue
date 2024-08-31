<template>
  <div>
    <Sidebar @on-change-component="changeComponent">
      <div class="home-wrapper">
        <component :is="current" />
      </div>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "../../Containers/Sidebar/Sidebar.vue";
import CardInfoVue from "@/Containers/CardInfo/CardInfo.vue";
import ListCarVue from "@/Containers/ListCar/ListCar.vue";
import EventListVue from "@/Containers/EventList/EventList.vue";
import Users from "@/Containers/Users/Users.vue";
import Projet from "@/Containers/Projet/ProjetComp.vue";
import Categorie from "@/Containers/Categorie/Categorie.vue";
export default {
  fetch() {
    console.log("first");
  },
  name: "HomeComponent",
  components: {
    Sidebar,
    CardInfoVue,
    ListCarVue,
    EventListVue,
    Categorie,
    Projet,
    Users,
  },
  data() {
    return {
      current: "Categorie",
    };
  },
  methods: {
    changeComponent: function (e) {
      this.current = e;
    },
  },
};
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home-content {
  display: flex;
  gap: 20px;
}
</style>
