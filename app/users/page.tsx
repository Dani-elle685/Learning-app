import { Suspense } from "react";
import fetchUsers from "../serverActions/fetchUsers";
import UsersCard from "./UsersCard";

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}
const page = async () => {
  const users = await fetchUsers();

  console.log("users", users);
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<div>Loading Data...</div>}>
        <UsersCard />
      </Suspense>
    </div>
  );
};

export default page;
