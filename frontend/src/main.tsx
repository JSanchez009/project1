import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5", // Should be close to gamecube purple
    },
    secondary: {
      main: "#f50057", // A soft redish-pink color
    },
    background: {
      default: "#f4f6f8",
    },
  },
  shape: {
    borderRadius: 12,
  },
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
