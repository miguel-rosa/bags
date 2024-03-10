import React, { type ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { getUserById } from './queries'

interface Props {
  children: ReactNode
}

interface IUserContext {
  state: {
    user?: User
    hasError: boolean
  }

}
const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider: React.FC<Props> = ({
  children
}) => {
  const [user, setUser] = useState<User>()
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    let ignore = false

    const loggedUser = window.localStorage.getItem('user')

    if (!loggedUser) {
      getUserById('12345').then((user) => {
        if (ignore) return
        if (user !== undefined) { setUser(user) }
      }).catch((_error) => {
        setHasError(true)
      })
      return
    }

    const parsedUser = JSON.parse(loggedUser) as User
    setUser(parsedUser)

    return () => {
      ignore = true
    }
  }, [])

  return (
    <UserContext.Provider
      value={
        {
          state: { user, hasError }

        }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default (): IUserContext => {
  const context = useContext(UserContext)
  return context
}
