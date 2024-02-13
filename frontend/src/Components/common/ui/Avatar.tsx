import React from 'react';
import harrypotter from "../assets/harrpotter.webp";

interface AvatarProps {
  imageUrl?: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, name }) => {
  return (
    <div className="flex p-2 rounded-lg items-center gap-4 border border-[#C07F00]/90">
      {imageUrl ? (
        <img src={imageUrl} alt="" className="w-8 h-8 rounded-full" />
      ) : (
        <p className="text-[#C07F00]/90 rounded-full font-semibold border-2 border-[#C07F00]/90 w-8 h-8 text-center flex items-center justify-center" style={{ textTransform: 'uppercase' }}>{name[0]}</p>
      )}
      <div className="font-medium text-white hover:text-[#C07F00]/90">
        <div>{name}</div>
      </div>
    </div>
  );
};

export default Avatar;
