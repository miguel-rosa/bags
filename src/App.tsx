import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { UserProvider } from './hooks/useUser'
import Routes from './pages/Routes'
import theme from './theme'

const App: React.FC = () => {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </UserProvider>
  )
}

export default App
