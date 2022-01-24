
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { Home } from 'features/Home';

import { theme } from 'styles/theme';


const globalStyles = <GlobalStyles styles={(theme) => ({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
  },

  html: {
  //  height: '100%',
   // width: '100%',
    [theme.breakpoints.down("md")]: {
      fontSize: '93.75%',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '87.5%',
    },
  },
  body: {
  //  height: '100%',
  //  width: '100%',
  },
  button: {
    cursor: "pointer",
  },
})} />;

export const App = () => {
  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      {globalStyles}
      
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
