import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div className="flex flex-wrap justify-center border-b-2 p-3">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
