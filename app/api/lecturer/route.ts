// /api/lecturer/id
// import { NextApiRequest, NextApiResponse } from "next";
// import { Lecturer } from "../../models/Lecturer";
// import { connectDB } from "../../lib/mongodb";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const db = await connectDB();
//   const lecturer = await Lecturer.findOne({ email: req.body.email });
//   if (lecturer) {
//     res.status(400).json({ message: "Lecturer already exists" });
//     return;
//   }
//   await Lecturer.create({
//     name: req.body.name,
//     email: req.body.email,
//   });
//   res.status(201).json({ message: "Lecturer created successfully" });
// }           