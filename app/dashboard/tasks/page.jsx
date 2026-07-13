import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/LogoutButton";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Button>
        <Link href="../dashboard">dashboard</Link>
      </Button>
      <LogoutButton />
    </div>
  );
}
