import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-purple-500 py-4 px-2">
      <h1 className="mr-5">Navbar</h1>
      <ul className="flex">
        <Link href="/">
          <li className="mr-5 cursor-pointer hover:bg-purple-800">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-5 cursor-pointer hover:bg-purple-800">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-5 cursor-pointer hover:bg-purple-800">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
