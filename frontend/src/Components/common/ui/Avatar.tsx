import React, { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

interface AvatarProps {
  name: string
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="flex p-2 rounded-lg items-center gap-4 border border-[#C07F00]/90">
      <div className="font-medium text-white px-6  hover:text-[#C07F00]/90">
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Avatar
