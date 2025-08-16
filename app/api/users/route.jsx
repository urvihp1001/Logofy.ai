import { db } from "@/configs/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { userEmail, userName } = body;

  try {
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data());
    }

    await setDoc(docRef, {
      email: userEmail,
      name: userName,
      credits:5,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "User created successfully",
      user: { email: userEmail, name: userName, credits: 5 } 
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
