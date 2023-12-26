import React from 'react';
import harrypotter from "../assets/harrpotter.webp"

const Avatar = ({ imageUrl, name, joinedDate }) => {
  return (
    <div className="flex p-2 rounded-lg items-center gap-4 border  border-[#C07F00]/90">
      <img className="w-8 h-8 rounded-full" src={harrypotter} alt="" />
      <div className="font-medium text-white hover:text-[#C07F00]/90">
        <div>{name}</div>
      </div>
    </div>
  );
};

export default Avatar;
