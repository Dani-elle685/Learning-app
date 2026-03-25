"use client";
import React, { useState, useTransition } from "react";
import { User } from "./page";

interface Props {
  user?: User;
}

const AddForm = ({ user }: Props) => {
 
  const [formData, setFormData] = useState({
    name: user?.name! ?? "",
    email: user?.email! ?? "",
  });

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
        alert("Please fill in all fields");
        return;
    }
    
    startTransition( async () => {
      try {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("Failed to submit");
        alert("Form submitted!");
        setFormData({
          name: "",
          email: "",
        });
      } catch (err) {
        alert(`Error submitting form: ${err}`);
      }
    });
  };


  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
        alert("Please fill in all fields");
        return;
    }
    
    startTransition( async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${user?._id!}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error("Failed to submit");
        alert("Form Updated!");
        setFormData({
          name: "",
          email: "",
        });
      } catch (err) {
        alert(`Error submitting form: ${err}`);
      }
    });
  };



  return (
    <div className="border p-4 w-fit">
      <h1>Add Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div  className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border"
          />
        </div>
        <div  className="flex flex-col mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border"
          />
        </div>
      
        {user ? (
          <button
            type="button"
            className="border mt-4 cursor-pointer"
            onClick={handleUpdate}
          >
            Update
          </button>
        ): (
          <button
            type="submit"
            className="border mt-4 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
};

export default AddForm;
