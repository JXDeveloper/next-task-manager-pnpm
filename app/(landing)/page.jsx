"use client";

import AuthLinks from "@/components/AuthLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Button variant="default" onClick={() => alert("hello")}>
          Button.
        </Button>

        <AuthLinks />
        <Button variant="outline">
          <Link href="/dashboard">dashboard</Link>
        </Button>
      </main>
    </div>
  );
}
