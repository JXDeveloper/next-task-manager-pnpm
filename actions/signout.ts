// app/auth/sign-up/actions.ts (or a new actions file)
"use server";

import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export async function signOutUser() {
  // Clears the secure session cookies from Neon's identity layer
  await auth.signOut();

  // Redirect the user back to your landing or login page
  redirect("/login");
}
