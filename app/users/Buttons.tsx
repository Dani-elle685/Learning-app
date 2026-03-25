"use client";
import React from "react";

const Buttons = ({ id }: { id: string }) => {
  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  const handleDelete = async () => {
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
    <div>
      <button
        className="border p-2 bg-blue-400 text-white cursor-pointer"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="border ml-2 p-2 bg-red-500 text-white cursor-pointer"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
