import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Access Review Automation Tracker",
  description: "A small CLI tool that compares user access records against an approved access list and flags mismatches. It helps simulate access review checks often used in IT support and security operations.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
