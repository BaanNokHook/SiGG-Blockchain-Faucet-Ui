import { createTheme } from '@mui/material'

let theme = createTheme({
  palette: {
    primary: {
      main: '#1E1C65',
    },
    secondary: {
      main: 'rgba(210,210,238, 0.5)',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    text: {
      primary: '#1E1C65',
      secondary: '#F14168',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      'Roboto Condensed',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
    fontWeightRegular: 700,
  },
})

theme = createTheme(theme, {
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
})

export default theme
