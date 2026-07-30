import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>this is our layout</p>
      {children}
    </div>
  );
}
