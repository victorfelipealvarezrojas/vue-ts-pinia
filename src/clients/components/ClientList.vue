<script lang="ts" setup>
import { RouterLink } from 'vue-router';


defineProps<{
    clients: any
}>();

</script>

<template>
    <div>


        <!-- Validación defensiva: primero verificar que clients existe -->
        <div v-if="!clients">
            <p>No hay clientes disponibles</p>
        </div>
        
        <!-- Lista de clientes cuando sí hay data -->
        <ul v-else>
            <li v-for="client of clients" :key="client.id">
                <RouterLink :to="{
                    name: 'client-page',
                    params: { id: client.id }
                }">
                    {{ client.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>