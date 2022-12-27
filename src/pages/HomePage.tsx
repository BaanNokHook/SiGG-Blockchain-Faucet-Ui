import { Box } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import Header from 'components/Header'
import TokenTransferForm from 'modules/tokenTester/components/TokenTransferForm'

const HomePage = (props: RouteComponentProps) => {
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        component="main"
        sx={{
          background: '#E9E8F2',
          flex: 1,
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            p: 4,
            width: ['100%', '40%'],
            borderRadius: 1,
            mx: 'auto',
            mt: 8,
          }}
        >
          <TokenTransferForm />
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
