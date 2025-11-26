import { NextResponse } from "next/server";
import { db } from "@/shared/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) return NextResponse.json({ message: "User not found", error: "User is not found in records" }, { status: 404 });
    await updateDoc(userRef, body);
    
    return NextResponse.json({ message: "User updated successfully", data: { id, ...body } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error: (error as Error).message }, { status: 500 });
  }
}
