import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AuthProvider } from 'contexts/AuthContext';
import routes from 'configs/configRoutes';

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <BrowserRouter>
        <main>{routes()}</main>
      </BrowserRouter>
    </AuthProvider>
  </ChakraProvider>
);
