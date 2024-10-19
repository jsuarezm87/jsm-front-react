import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({})

export const LoginApp = () => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}
