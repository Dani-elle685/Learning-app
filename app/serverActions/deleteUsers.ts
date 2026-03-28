"use server";

import { revalidatePath } from "next/cache";

export const deleteUsers = async (id: string) => {

  const response = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
   revalidatePath('/users');
}
