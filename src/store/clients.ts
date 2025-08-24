import { ref } from "vue";
import { defineStore } from "pinia";

export const useCientStore = defineStore("clients", () => {
  const currentPage = ref(1);
  const totalPages = ref(5);
  const clients = ref<any>();

  return {
    // State properties
    currentPage,
    totalPages,
    clients,

    // Getters

    // Actions
    setClients(newClients: any) {
      clients.value = newClients;
    },
    setPage(page: number) {
      if (currentPage.value === page) return;
      if (page <= 0) return;
      if (page > totalPages.value) return;

      currentPage.value = page;
    },
  };
});
