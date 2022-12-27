import { useQuery } from '@tanstack/react-query'
import { faucetApi } from 'services/baseAxios'

interface Asset {
  _id: string
  address: string
  balance: number
  decimal: number
  logo: string
  name: string
  symbol: string
}

const useGetAssetList = () => {
  const query = useQuery<Asset[], unknown>(['assets'], () =>
    faucetApi
      .get<Asset[]>('/assets')
      .then((resp) =>
        resp.data?.filter(
          ({ name }) => typeof name !== 'undefined' && name !== ''
        )
      )
  )

  return query
}

export default useGetAssetList
