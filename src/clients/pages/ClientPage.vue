<script lang="ts" setup>
import { useRoute } from 'vue-router';
import useClientQuery from '../composables/useClientQuery';
import type{ Client } from '../interfaces/client';
import { clientsApi } from '@/api/clients-api';
import { useMutation } from '@tanstack/vue-query';

const route = useRoute()

const {client, isLoading} = useClientQuery(+route.params.id)

const updateClient = async(client: Client):Promise<Client> => {

    await new Promise((resolve) => {
    setTimeout(() => resolve(true), 5000);
  });

  const {id, ...rest} = client;
  const {data} = await clientsApi.patch<Client>(`/clients/${id}`, rest)
  return data;
}

const  ClientMutation = useMutation({
  mutationFn: updateClient
})


</script>

<template>
  <h3 v-if="ClientMutation.isPending.value">Guardando...</h3>
    <h3 v-if="ClientMutation.isSuccess.value">Guardado</h3>

  <h3 v-if="isLoading">Loading...</h3>

  <div>
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="ClientMutation.mutate(client)">
      <input type="text" placeholder="Nombre" v-model="client.name" />
      <br>
      <input type="text" placeholder="Direccion" v-model="client.address" />
      <br />
      <button type="submit" :disabled="ClientMutation.isPending.value">Guardar</button>
    </form>
  </div>
  <code>
    {{ client }}
  </code>
</template>

<style scoped>

  input {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
  }
  button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }

</style>