import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  fonts: {
    heading: 'Quicksand, sans-serif',
    body: 'Quicksand, sans-serif',
  },
  colors: {
    brand: {
      50: '#f7f7f7', // Very light gray
      100: '#e1e1e1', // Light gray
      200: '#cfcfcf', // Light-medium gray
      300: '#b1b1b1', // Medium gray
      400: '#8e8e8e', // Dark-medium gray
      500: '#707070', // Dark gray
      600: '#4e4e4e', // Very dark gray
      700: '#2e2e2e', // Almost black
      800: '#1e1e1e', // Almost black
      900: '#0e0e0e', // Almost pure black
    },
    limeGreen: {
      500: '#32CD32', // Lime green
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        background: mode('#f7f7f7', '#0e0e0e')(props),
        color: mode('#0e0e0e', '#f7f7f7')(props),
        fontFamily: 'Quicksand, sans-serif',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode('limeGreen.500', 'limeGreen.500')(props),
      }),
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('brand.400', 'brand.400')(props),
      }),
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default customTheme;
