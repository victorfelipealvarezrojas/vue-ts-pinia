<script setup lang="ts">
import useClientsQuery from "../composables/useClientsQuery";

const { getPage, totalPageNumbers, currentPage, totalPages } = useClientsQuery();
</script>

<template>
  <div>
    <button :disabled="currentPage === 1" @click="getPage(currentPage-1)">Anterior</button>
    <button
      :class="{ active: currentPage === number }"
      v-for="number of totalPageNumbers"
      :key="number"
      @click="getPage(number)"
    >
      {{ number }}
    </button>
    <button :disabled="currentPage === totalPages" @click="getPage(currentPage+1)">Siguiente</button>
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
