"use client";

import "../global.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    const authLinks = [
        { title: "Login", href: "/login" },
        { title: "Register", href: "/register" },
        { title: "Forgot Password", href: "/forgot-password" },
      ];

    const pathname = usePathname();

  return (
    <div>
      <h2 className="text-2xl font-bold text-red-500">Auth Layout</h2>
      <nav>
        <ul>
          {authLinks.map(link => (
            <li key={link.href}>
              <Link className={pathname === link.href ? "text-purple-500 font-bold" : ""} href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  )
}