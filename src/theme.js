import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#f7f7f7',
      100: '#e1e1e1',
      200: '#cfcfcf',
      300: '#b1b1b1',
      400: '#8e8e8e',
      500: '#707070',
      600: '#4e4e4e',
      700: '#2e2e2e',
      800: '#1e1e1e',
      900: '#0e0e0e',
    },
    limeGreen: {
      500: '#32CD32',
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        background: mode(
          'linear-gradient(to right, #f7f7f7, #e1e1e1)',
          'linear-gradient(to right, #0e0e0e, #2e2e2e)'
        )(props),
        color: mode('#0e0e0e', '#f7f7f7')(props),
        fontFamily: 'Quicksand, sans-serif',
      },
    }),
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default customTheme;
