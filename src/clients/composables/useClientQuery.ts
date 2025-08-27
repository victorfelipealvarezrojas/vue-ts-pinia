import { ref, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { clientsApi } from "@/api/clients-api";

const getClient = async (id: number): Promise<any> => {
  const { data } = await clientsApi.get<any[]>(`/clients/${id}`);
  return data;
};

const useClientQuery = (id: number) => {
  const client = ref<any>();

  const { isLoading, data } = useQuery({
    queryKey: ["client", id],
    queryFn: () => getClient(id),
  });

  watch(
    data,
    () => {
      if (data) {
        client.value = { ...data.value };
      }
    },
    { immediate: true }
  );

  return {
    //properties
    isLoading,
    client,
    //methods
    //getters (pueden ser computeds)
  };
};

export default useClientQuery;
