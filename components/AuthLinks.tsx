import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthLinks() {
  return (
    <div className="flex items-center gap-4">
      {/* Ghost or outline variant works great for Sign In */}
      <Button variant="outline" asChild className="">
        <Link href="/auth/sign-in">Sign In</Link>
      </Button>

      {/* Default variant for the primary CTA */}
      <Button asChild className="">
        <Link href="/auth/sign-up">Sign Up</Link>
      </Button>
    </div>
  );
}
