import Link from "next/link";

export function Navbar() {
  return (
    <header className="text-white bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg py-9 sm:py-5 border-b-2 border-gray-500">
      <ul className="flex justify-end mr-4 gap-4 h-full">
        <li>
          <Link className="cursor-pointer hover:text-gray-300 transition-all" href={"/login"}>Login</Link>
        </li>
        <li>
          <Link className="cursor-pointer hover:text-gray-300 transition-all" href={"/sobre"}>Sobre</Link>
        </li>
      </ul>
    </header>
  );
}
