import { NextResponse } from "next/server";
import { auth, db } from "@/shared/lib/firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { Product } from "@/shared/types/Product";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const active = searchParams.get("active") || "";
    let productCollection;
    if (active) {
      const q = query(collection(db, "products"), where("status", "==", active === "true"));
      productCollection = await getDocs(q);
    } else {
      productCollection = await getDocs(collection(db, "products"));
    }
    const products: Product[] = productCollection.docs.map(doc => Product.parse({ id: doc.id, ...doc.data() })).filter(product => product.nama.toLowerCase().includes(search.toLowerCase()));
    return NextResponse.json({ message: "Products fetched successfully", data: products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch products", error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const docRef = await addDoc(collection(db, "products"), {...data, createdAt: new Date()});
    return NextResponse.json({ message: "Product added successfully", data: { ...data } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add product", error: (error as Error).message }, { status: 500 });
  }
}