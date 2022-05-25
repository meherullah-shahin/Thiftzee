import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5943',
      light: '#E5E5E5'
    },
    secondary: {
      main: '#193C46'
    }
  },
  typography: {
    allVariants: {
      color: '#193C46'
    }
  }
});

export default theme;
