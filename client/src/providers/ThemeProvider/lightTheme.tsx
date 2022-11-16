import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#3174ad'
    },
    background: {
      default: '#f1f1f1'
    }
  },
  typography: { fontFamily: 'Segoe UI' }
});

export default lightTheme;
