import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const GoogleLoginButton: React.FC = () => {
  const handleGoogleLogin = () => {
    const scopes = ['openid', 'profile', 'email', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']

    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      access_type: 'offline',
      response_type: 'code',
      scope: scopes.join(' '),
      state: new URLSearchParams({
        redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      }).toString(),
    })

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`
  }

  return (
    <button onClick={handleGoogleLogin} className="w-full border text-white border-white bg-black rounded-lg py-2.5 flex text-sm items-center justify-center gap-2">
      <span className="text-xl">
        <FcGoogle />
      </span>
      Login with Google
    </button>
  )
}

export default GoogleLoginButton
