<script lang="ts" setup>
import ClientList from '../components/ClientList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useClientsQuery from '../composables/useClientsQuery';

const {isLoading, clients } = useClientsQuery();

</script>

<template>
  <div>
  <h1>Listado de clientes</h1>

  <!-- Aquí puedes agregar la lógica para mostrar la lista de clientes -->
    <ClientList :clients="clients"/>

  <!-- Paginacion -->
  <PaginationNumbers />


  <!-- Loading -->

  </div>
</template>

<style scoped>  </style>