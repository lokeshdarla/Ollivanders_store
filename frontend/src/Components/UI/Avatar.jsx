import React from 'react';
import harrypotter from "../assets/harrpotter.webp"

const Avatar = ({ imageUrl, name, joinedDate }) => {
  return (
    <div className="flex items-center gap-4">
      <img className="w-8 h-8 rounded-full" src={harrypotter} alt="" />
      <div className="font-medium">
        <div>{name}</div>
      </div>
    </div>
  );
};

export default Avatar;
