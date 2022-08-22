export function useOctadesk<typeData>(baseUrl: string, params?: object) {
  const config = useRuntimeConfig();

  return useFetch<typeData>(`${config.public.OCTADESK_API_URL}/`+ baseUrl, {
    key: baseUrl,
    method: "GET",
    headers: {
      Authorization: `Bearer ${config.public.TOKEN_API}`,
    },
    params,
  });
}
