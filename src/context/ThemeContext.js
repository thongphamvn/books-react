import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext } from 'react';

export const AppThemeContext = createContext();

function AppThemeProvider(props) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <AppThemeContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export default AppThemeProvider;
