import { Box } from '@mui/material'
import { SxProps } from '@mui/system'
import { getCoinDetailBySymbol } from 'libs/coin'

const CoinIcon = ({ symbol, sx }: { symbol: string; sx?: SxProps }) => {
  const isValidCoin = typeof getCoinDetailBySymbol(symbol) !== 'undefined'

  if (!isValidCoin) {
    return <span>{symbol}</span>
  }

  return (
    <Box
      sx={{
        width: 33,
        height: 33,
        ...sx,
      }}
      component="img"
      src={
        ['nxc', 'nxn', 'weth'].includes(symbol)
          ? require(`images/${symbol}.svg`).default
          : require(`cryptocurrency-icons/svg/color/${symbol}.svg`).default
      }
      alt={symbol}
    />
  )
}

export default CoinIcon
