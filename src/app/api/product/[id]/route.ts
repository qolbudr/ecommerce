import { NextResponse } from "next/server";
import { db } from "@/shared/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function POST(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) return NextResponse.json({ message: "Product not found", error: "Product is not found in records" }, { status: 404 });
    await updateDoc(productRef, body);
    
    return NextResponse.json({ message: "Product updated successfully", data: { id, ...body } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update product", error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) return NextResponse.json({ message: "Product not found", error: "Product is not found in records" }, { status: 404 });
    await deleteDoc(productRef);
    
    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete product", error: (error as Error).message }, { status: 500 });
  }
}
