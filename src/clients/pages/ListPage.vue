<script lang="ts" setup>
import ClientList from "../components/ClientList.vue";
import PaginationNumbers from "../components/PaginationNumbers.vue";
import useClientsQuery from "../composables/useClientsQuery";

const { isLoading, clients, currentPage, totalPages, getPage } = useClientsQuery();
</script>

<template>
  <div>
    <h1>Listado de clientes</h1>

    <!-- Aquí puedes agregar la lógica para mostrar la lista de clientes -->
    <ClientList :clients="clients" />

    <!-- Paginacion -->
    <PaginationNumbers
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="getPage($event)"
    />

    <!-- Loading -->
    <div v-if="isLoading">Cargando...</div>
  </div>
</template>

<style scoped></style>
