import { NextResponse } from "next/server";
import { auth, db } from "@/shared/lib/firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { Product } from "@/shared/types/Product";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const productCollection = await getDocs(query(collection(db, "products")));
    const products: Product[] = productCollection.docs.map(doc => Product.parse({ id: doc.id, ...doc.data() })).filter(product => product.nama.toLowerCase().includes(search.toLowerCase()));
    return NextResponse.json({ message: "Products fetched successfully", data: products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch products", error: (error as Error).message }, { status: 500 });
  }
}