"use client";

import { authClient } from "@/lib/auth/client";

export function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await authClient.signOut();
        window.location.replace("/auth/sign-in");
      }}
    >
      Sign Out
    </button>
  );
}
