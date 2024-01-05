"use client";
import { link } from "fs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex bg-purple-500 py-4 px-2 justify-between">
      <div className="flex">
        <h1 className="mr-5">Navbar</h1>
        <ul className="flex">
          <Link href="/">
            <li
              className={`mr-5 ${
                pathname === "/" ? "text-blue-800" : "text-white"
              } cursor-pointer hover:bg-purple-800`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-5 ${
                pathname === "/about" ? "text-blue-800" : "text-white"
              } cursor-pointer hover:bg-purple-800`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-5 ${
                pathname === "/about/profile" ? "text-blue-800" : "text-white"
              } cursor-pointer hover:bg-purple-800`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <button
          className="bg-white rounded-md px-3 h-7 text-sm text-black"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
