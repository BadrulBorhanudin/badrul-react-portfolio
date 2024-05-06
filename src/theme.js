import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#e6e9f0',
      100: '#c3c8d1',
      200: '#9da5af',
      300: '#7a8291',
      400: '#5a6074',
      500: '#43465a',
      600: '#343648',
      700: '#262736',
      800: '#191a24',
      900: '#0a0a12',
    },
  },
  styles: {
    global: {
      'html, body': {
        background: '#262736',
        color: '#e6e9f0',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: '#e6e9f0',
      },
    },
    Link: {
      baseStyle: {
        color: 'teal.300',
      },
    },
  },
});

export default customTheme;