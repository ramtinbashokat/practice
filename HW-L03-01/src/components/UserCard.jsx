import React from "react";

const UserCard = ({ name, age, city }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 m-2 border border-gray-200 w-80 ">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{age}</p>
      <p className="text-lg font-semibold text-blue-600 mt-2">{city}</p>
    </div>
  );
};

export default UserCard;
