import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function AuthLinks() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/auth/sign-up" className={buttonVariants({ variant: "outline" })}>
        sign-up
      </Link>
      <Link href="/auth/sign-in" className={buttonVariants({ variant: "default" })}>
        sign-in
      </Link>
    </div>
  );
}
