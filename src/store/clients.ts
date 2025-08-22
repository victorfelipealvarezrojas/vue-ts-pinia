import { ref } from "vue";
import { defineStore } from "pinia";
import { Client } from "@/clients/interfaces/client";

export const useCientStore = defineStore("clients", () => {
  const currentPage = ref(1);
  const totalPages = ref(5);
  const clients = ref<Client[]>([]);

  return {
    // State properties
    currentPage,
    totalPages,
    clients,

    // Getters

    // Actions
    setClients(newClients: Client[]) {
      clients.value = newClients;
    },
    setPAGE(newPage: number) {
      if (currentPage.value === newPage) {
        return;
      }
      currentPage.value = newPage;
    },
  };
});
