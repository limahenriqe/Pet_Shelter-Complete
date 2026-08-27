import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-700 text-white px-8 py-4 flex items-center justify-between">
            
            <h1 className="text-2xl font-bold">
                Pet Shelter
            </h1>

            <nav className="flex gap-6">
                <Link href="/" className="hover:text-gray-300">
                    Home
                </Link>

                <Link href="/Pets" className="hover:text-gray-300">
                    View Animals
                </Link>

                <Link href="/Cadastro" className="hover:text-gray-300">
                    Add Animal
                </Link>
            </nav>

        </header>
    );
}