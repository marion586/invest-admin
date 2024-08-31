<script setup>
import HeadProduct from "../HedProduct/HeadProduct.vue";
import { ref, inject, watch, onMounted, defineProps } from "vue";
import Title from "../Title/TitleComponent.vue";

const isBordered = inject("isBordered");
const border = ref(isBordered ? "1px solid #ccc" : "none");

const props = defineProps({
  DataCard: {
    type: Object,
    required: true,
  },

  isPublic: {
    type: Boolean,
    default: true,
  },
});

const status = ref("pending");

function setStatus() {
  switch (props.DataCard.status) {
    case "En attente":
      status.value = "pending";
      break;
    case "En cours":
      status.value = "progress";
      break;
    case "Fini":
      status.value = "Finished";
      break;
  }
}
watch(
  () => props.DataCard.status,
  function () {
    setStatus();
  },
  {
    immediate: true,
    deep: true,
  }
);

onMounted(() => {
  setStatus();
  console.log(props.DataCard.status);
});
</script>

<template>
  <div class="card max-w-xl">
    <HeadProduct
      :image="DataCard.user.image"
      :Text="DataCard.user.email"
      :label="`${DataCard.user.firstName} ${DataCard.user.lastName} `"
    />
    <figure class="card__image" @click="$emit('showDetails', DataCard._id)">
      <img :src="DataCard.image ? DataCard.image : ' '" alt=" card product" />
    </figure>
    <div class="card__content-type">
      <Title type="h4" :label="DataCard.title" weight="bold" />
      <Title type="h5" :label="DataCard.categorie" weight="bold" />
    </div>

    <div :class="`card__action card--${status}`">
      <span> {{ DataCard.status }}</span>
    </div>

    <div class="card__content">
      <div class="card__content-type">
        <Title type="h5" label="Mountant Totale:" />
        <span>{{ DataCard.amount }} £</span>
      </div>
      <div class="card__content-type">
        <Title type="h5" label="Mountant Minimale:" />
        <span>{{ DataCard.amountMin }} £</span>
      </div>

      <div class="card__content-type">
        <Title type="h5" label="Description:" />
        <p class="card__content-type--description text-clip overflow-hidden">
          {{ DataCard.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card:hover {
  transform: translateY(-20px);
  transition: 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 9px 12px;
}

.card {
  border: 1px solid grey !important;
  display: flex;

  flex-direction: column;
  width: auto;
  height: auto;
  padding: 16px;
  gap: 18px;
  background: #ffffff;
  border-radius: 8px;
  width: auto;
  border: 1px solid #ccc;
  border: v-bind(border);
  &__image {
    width: auto;
    height: 160px;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    @apply flex flex-col gap-[10px] border-[1px] p-4 rounded-md;
    &-type {
      display: flex;
      justify-content: space-between;
      span,
      p {
        color: var(--color-alert-str-rose);
        background: rgba(255, 130, 130, 0.15);
        border-radius: 15px;
        padding: 4px 12px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 17px;
        width: fit-content;
      }
      &--description {
        text-align: end;
        width: min-content;
      }
    }
  }

  &__value {
    display: flex;
    gap: 18px;
    &--item {
      display: flex;
      align-items: center;
      gap: 5px;
      :last-child {
        font-weight: bold;
        font-size: 12px;
        line-height: 16.44px;
      }
    }
  }
  &__action {
    width: 100%;
    text-align: center;

    align-self: end;
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #797575;
    }
  }
  &--pending {
    @apply rounded-sm bg-[#ccc] p-1;
  }
  &__adress {
    display: flex;
    align-items: center;
    gap: 5px;
    :last-child {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #a39f9f;
    }
  }
}
</style>
