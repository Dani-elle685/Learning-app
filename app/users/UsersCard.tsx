"use client";
import Link from "next/link";
import Buttons from "./Buttons";
import { User } from "./page";
import { use, useState } from "react";
import AddForm from "./form";

interface Users {
  users: User[];
}

const UsersCard = ({ users }: Users) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<User>();

  const handleEdit = (id:string) => {
    setUser(users.find((user) => user._id === id));
    setIsEditing(true);
  };


  const handleDelete = async (id: string) => {

    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    alert("User deleted");
  };

  return (
    <div className=" mt-8">
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

      {isEditing && (
        <div className="mt-4">
          <AddForm user={user}/>
        </div>
      )}
    </div>
  );
};

export default UsersCard;
