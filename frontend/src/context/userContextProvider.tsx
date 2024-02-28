import { jwtDecode } from 'jwt-decode'
import React, { createContext, FC, ReactNode, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name: string
  admin: boolean
  exp: number
}

interface UserContextProps {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      fetchUserDetails(accessToken)
    }
  }, [])

  const fetchUserDetails = (accessToken: string) => {
    const data = jwtDecode<User>(accessToken)
    setUser(data)
  }

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
