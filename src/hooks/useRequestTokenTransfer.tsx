import { useMutation } from '@tanstack/react-query'
import { faucetApi } from 'services/baseAxios'

function useRequestTokenTransfer() {
  return useMutation<
    { tx: string },
    { id?: string; reason?: string; field: Record<string, string> },
    { asset: string; address: string }
  >({
    mutationFn: ({ asset, address }) =>
      faucetApi
        .post('/requests', { asset, address })
        ?.then((response) => response.data),
  })
}

export default useRequestTokenTransfer
