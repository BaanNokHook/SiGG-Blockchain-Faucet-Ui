import React from 'react'
import { Router } from '@reach/router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import HomePage from 'pages/HomePage'
import theme from './config/theme'

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router style={{ display: 'contents' }}>
            <HomePage path="/" />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App
