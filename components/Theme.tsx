import { createTheme } from '@mui/material/styles';
import SoraBold from '../fonts/SoraBold.woff2'; 

const jubileum_theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#57995a',
    },
  },
  typography: {
    fontSize: 15,
    fontFamily: 'SoraBold'
  }
});

export default jubileum_theme
