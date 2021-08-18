import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { teal, purple } from '@material-ui/core/colors'

import App from './App'
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[900]
    },
    secondary: {
      main: purple[800]
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
