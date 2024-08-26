import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-xl h-screen mx-auto px-3">
      {children}
    </div>
  );
}
