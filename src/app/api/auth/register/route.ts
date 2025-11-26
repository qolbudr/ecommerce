import { NextResponse } from "next/server";
import { auth, db } from "@/shared/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { User } from "@/shared/types/User";
import { generatePassword } from "@/shared/utils/password.utils";
import { sendEmail } from "@/shared/lib/mailer";

export async function POST(req: Request) {
    try {
        const password = generatePassword();
        const { nama, email, telepon, status, role } = await req.json();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            nama: nama,
            email: user.email,
            telepon: telepon,
            status: status,
            role: role,
            createdAt: new Date(),
        });

        const result: User = { id: user.uid, nama, email: user.email!, telepon: telepon, role: role as 'ADMIN' | 'USER', status: false };
        await sendEmail(email, "Your Account Credentials", `Hello ${nama},\n\nYour account has been created.\nEmail: ${email}\nPassword: ${password}\n\n`);
        return NextResponse.json({ message: "Registration successful", data: result }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Registration failed", error: (error as Error).message }, { status: 500 });
    }
}