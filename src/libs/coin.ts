import keyBy from 'lodash/keyBy'
import coinListBase from 'cryptocurrency-icons/manifest.json'

interface Coin {
  symbol: string
  name: string
  color: string
}
export const coinList: Coin[] = [
  ...coinListBase,
  {
    symbol: 'NXC',
    name: 'SiGG Copper',
    color: '#ffffff',
  },
  {
    symbol: 'NXN',
    name: 'SiGG Nickel',
    color: '#ffffff',
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    color: '#ffffff',
  },
]
export const coinDict = keyBy(coinList, 'symbol')
export const getCoinDetailBySymbol = (
  symbol: string
): { symbol: string; name: string; color: string } | undefined => {
  return coinDict?.[symbol.toUpperCase()]
}
