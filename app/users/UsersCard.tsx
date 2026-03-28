"use client";

import Link from "next/link";
import { User } from "./page";
import { useEffect, useState } from "react";
import AddForm from "./form";
import { deleteUsers } from "../serverActions/deleteUsers";
import fetchUsers from "../serverActions/fetchUsers";

// interface Users {
//   users: User[];
// }

const UsersCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<User>();

  const [users, setUsers] = useState<User[]>([]);

   const getUsers = async () => {
       const users = await fetchUsers();
      setUsers(users);
    };

  useEffect( ()=>{
    getUsers();
  }, []);

  const handleEdit = (id:string) => {
    setUser(users.find((user) => user._id === id));
    setIsEditing(true);
  };


  const handleDelete = async (id: string) => {
    await deleteUsers(id);
    alert("User deleted");
  };

  return (
    <div className=" mt-8">
      {isEditing ? (
        <div className="mt-4">
          <AddForm user={user}/>
        </div>
      ):(
       <AddForm />
       )}

      <h1>list of users</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user._id} className="border p-4">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.createdAt}</p>
            <div>
              <button
                className="border p-2 bg-blue-400 text-white cursor-pointer"
                onClick={() => handleEdit(user._id)}
              >
                Edit
              </button>
              <button
                className="border ml-2 p-2 bg-red-500 text-white cursor-pointer"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>

              <Link href={`/users/${user._id}`}> View   </Link>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default UsersCard;
