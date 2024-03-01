import { LoginForm, LoginResponse } from "@/constants"
import axios, { AxiosResponse } from 'axios'
import toast from "react-hot-toast"

export const handleLogin = async (user:LoginForm) => {
  try {
    const loginUrl = 'http://127.0.0.1:8000/login'

    const response: AxiosResponse<LoginResponse> = await axios.post(
      loginUrl,
      {
        username:user.username,
        password:user.password
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.status === 200) {
      const data = response.data
      localStorage.setItem('accessToken', data.accessToken);
      toast.success("Successfully Logged in");
    } else {
      console.error('Login failed with status:', response.status)
      toast.error("Invalid Credentials");
    }
  } catch (error: any) {
    toast.error('Error during login');
    console.error('Error during login:', error.message)
  }
}
