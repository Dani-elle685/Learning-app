
// import 'server-only'
"use server";

import { revalidatePath } from 'next/cache';
import { User } from '../users/page';

const fetchUsers = async () => {

   const allUsers = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const users: User[] = await allUsers.json();
 
  return users;
}

export default fetchUsers;  

