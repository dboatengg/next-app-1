import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link>
    <Link href="/forgot-password">Forgot Password</Link>
    <Link href="/counter">Counter</Link>
    <Link href="/about">About</Link>
    <Link href="/products">Products</Link>
    <Link href="/contact">Contact</Link>
    </>
  );
}