import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface User {
  id: string
  email: string
  name: string
  admin: boolean
  exp: number
}

interface AuthResult {
  user: User | null
  logout: () => void
}

export default function useAuth(): AuthResult {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const fetchData = async () => {
    setLoading(true)
    setError(null)

    try {
      const accessToken = getAccessToken()
      const decodedAccessToken = jwtDecode<User>(accessToken)

      if (decodedAccessToken.exp * 1000 < Date.now()) {
        throw new Error('Access token expired.')
      }

      setUser(decodedAccessToken)
    } catch (error) {
      setError('Error fetching user data: ' + error)
    } finally {
      setLoading(false)
    }
  }

  const getAccessToken = (): string => {
    const accessTokenFromUrl = new URLSearchParams(window.location.search).get('token')
    const accessTokenFromLocalStorage = localStorage.getItem('accessToken')

    if (accessTokenFromUrl) {
      localStorage.setItem('accessToken', accessTokenFromUrl)
      window.history.replaceState({}, '', window.location.pathname)
      return accessTokenFromUrl
    } else if (accessTokenFromLocalStorage) {
      return accessTokenFromLocalStorage
    } else {
      throw new Error('Access token not found in local storage.')
    }
  }

  const logout = (): void => {
    localStorage.removeItem('accessToken')
    navigate('/')
    setUser(null)
  }

  useEffect(() => {
    fetchData()
  }, [navigate])

  return { user, logout }
}
