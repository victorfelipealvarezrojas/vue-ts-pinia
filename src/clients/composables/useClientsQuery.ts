import { clientsApi } from "@/api/clients-api";

import { useQuery } from "@tanstack/vue-query";
import { useCientStore } from "@/store/clients";
import { storeToRefs } from "pinia";

import { computed, watch } from "vue";

const getClients = async (page: number): Promise<any> => {
  const { data } = await clientsApi.get<any[]>(`/clients?_page=${page}`);
  return data;
};

const useClientsQuery = () => {
  const store = useCientStore();
  const { currentPage, clients, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery({
    queryKey: ["clients?page=", currentPage],
    queryFn: () => getClients(currentPage.value),
  });

  watch(data, (clients) => {
    if (clients) {
      store.setClients(clients);
    }
  });

  return {
    // Properties
    isLoading,
    clients,
    currentPage,
    totalPages,
    // Methods
    getPage(page: number){
      store.setPage(page);
    },
    // getters
    totalPageNumbers: computed(
      () => [...new Array(totalPages.value)].map((_, i) => i + 1)
    ),

  };
};

export default useClientsQuery;
