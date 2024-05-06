import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import customTheme from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
);
