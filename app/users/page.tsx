import AddForm from "./form";
import UsersCard from "./UsersCard";

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}
const page = async () => {

  const allUsers = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const users: User[] = await allUsers.json();

  console.log("users", users);
  return (
    <div className="container mx-auto p-4">
      <AddForm />
      <UsersCard users={users ?? []} />
    </div>
  );
};

export default page;
