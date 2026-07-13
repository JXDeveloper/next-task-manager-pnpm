import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/LogoutButton";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Button>
        <Link href="dashboard/tasks">tasks</Link>
      </Button>
      <LogoutButton />
    </div>
  );
}
