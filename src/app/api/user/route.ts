import { NextResponse } from "next/server";
import { auth, db } from "@/shared/lib/firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { User } from "@/shared/types/User";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const userCollection = await getDocs(query(collection(db, "users")));
    const users: User[] = userCollection.docs.map(doc => User.parse({ id: doc.id, ...doc.data() })).filter(user => user.nama.toLowerCase().includes(search.toLowerCase()));
    return NextResponse.json({ message: "Users fetched successfully", data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch users", error: (error as Error).message }, { status: 500 });
  }
}