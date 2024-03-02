import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Overpass', sans-serif`,
    body: `'Overpass', sans-serif`,
  },
  colors: {
    orange: 'hsl(25, 97%, 53%)',
    grey: {
      light: 'hsl(217, 12%, 63%)',
      medium: 'hsl(216, 12%, 54%)',
    },
    blue: {
      dark: 'hsl(213, 19%, 18%)',
      veryDark: 'hsl(216, 12%, 8%)',
      dark2: 'hsl(210, 19%, 15%)',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
