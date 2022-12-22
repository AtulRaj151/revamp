import React,{ useMemo} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContextProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              mode: prefersDarkMode ? 'dark' : 'light',
              primary: {
                main: '#fff',
                shadow: '0.1px 1px 4px 0 #e7eeef'
              },
              secondary: {
                main: '#1ba94c',
              },
              text: {
                breadcrumb: '#738f93'
              }
            }
          }),
        [prefersDarkMode],
      );
 return (
     <ThemeProvider theme={theme}>
        {children}
     </ThemeProvider>
 )
}

export default ThemeContextProvider;