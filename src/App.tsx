import React from 'react'

import Main from './pages/Main'
import { UserProvider } from './hooks/useUser'

const App: React.FC = () => {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  )
}

export default App
