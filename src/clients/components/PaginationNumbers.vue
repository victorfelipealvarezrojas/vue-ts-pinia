<script setup lang="ts">
import { ref, toRef, watch } from "vue";

const props = defineProps<{
    totalPages: number;
    currentPage: number;
}>();

const emit = defineEmits(['page-changed']);

const currentPage = toRef(props, "currentPage");
const totalPages = toRef(props, "totalPages");

const totalPageNumbers = ref<number[]>([]);
watch(totalPages, () => {
  totalPageNumbers.value = [...new Array(totalPages.value)].map((_,i) => i + 1);
}, { immediate: true });


</script>

<template>
  <div>
    <button :disabled="currentPage === 1" @click="emit('page-changed',currentPage-1)">Anterior</button>
    <button
      :class="{ active: currentPage === number }"
      v-for="number of totalPageNumbers"
      :key="number"
      @click="emit('page-changed', number)"
    >
      {{ number }}
    </button>
    <button :disabled="currentPage === totalPages" @click="emit('page-changed',currentPage+1)">Siguiente</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #50ac59;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #207328;
}

.active {
  background-color: #207328;
}
</style>
