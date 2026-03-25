
import { connectDB } from "@/app/lib/mongodb";
import { User } from "@/app/models/User";
import { NextResponse } from "next/server";


// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const body = await req.json();

//     const user = await User.create(body);

//     return NextResponse.json(user, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to create user" },
//       { status: 500 }
//     );
//   }
// }


// CREATE USER WITH EMAIL NORMALIZATION AND DUPLICATE CHECK
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    // Normalize email
    body.email = body.email.toLowerCase().trim();

    // Check existing
    const existingUser = await User.findOne({ email: body.email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const user = await User.create(body);

    return NextResponse.json(user, { status: 201 });

  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}




// GET ALL USERS
export async function GET() {
  try {
    await connectDB();
    const users = await User.find();

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}