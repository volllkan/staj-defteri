import Link from "next/link";

export default function Header ()  {
  return (
    <header className="p-6 bg-gray-800 text-white">
        <nav>
          <Link href="/"> Anasayfa </Link>
        </nav>
    </header>
  );
}


