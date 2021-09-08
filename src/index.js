import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { teal, purple, red } from '@material-ui/core/colors'

import { AuthProvider } from './state/auth'

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[900]
    },
    secondary: {
      main: purple[800]
    },
    alert: {
      main: red[600]
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
