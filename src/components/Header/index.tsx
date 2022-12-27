import { Container, AppBar, Typography, Box } from '@mui/material'
import { Link } from '@reach/router'

import logo from 'images/logo.svg'

const Header = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
        }}
      >
        <Box
          component={Link}
          to="/"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={logo}
            width="48px"
            height="24px"
            mr={2}
            alt="SiGG Faucet"
          />
          <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
            SiGG Faucet
          </Typography>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
