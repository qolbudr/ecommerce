import { NextResponse } from "next/server";
import { auth, db } from "@/shared/lib/firebase";
import { collection, getDocs, query, where, addDoc, orderBy } from "firebase/firestore";
import { Product } from "@/shared/types/Product";

export async function GET(req: Request) {
  try {
    const countUser = await getDocs(query(collection(db, "users")));
    const countProduct = await getDocs(query(collection(db, "products")));
    const countUserActive = await getDocs(query(collection(db, "users"), where("status", "==", true)));
    const countProductActive = await getDocs(query(collection(db, "products"), where("status", "==", true)));

    const newProduct = await getDocs(query(collection(db, "products"), orderBy("createdAt", "desc")));
    const latestProducts: Product[] = newProduct.docs.slice(0, 10).map(doc => Product.parse({ id: doc.id, ...doc.data() }));

    return NextResponse.json({ 
      message: "Dashboard summary fetched successfully", 
      data: {
        totalUsers: countUser.size,
        totalProducts: countProduct.size,
        activeUsers: countUserActive.size,
        activeProducts: countProductActive.size,
        latestProducts: latestProducts
      } 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch dashboard summary", error: (error as Error).message }, { status: 500 });
  }
}