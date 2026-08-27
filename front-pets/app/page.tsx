import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Header />

            <main className="flex flex-col items-center justify-center px-6 py-20">

                <h1 className="text-5xl font-bold text-slate-700 mb-6">
                    Welcome to Pet Shelter
                </h1>

                <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
                    Manage shelter animals easily. View registered pets,
                    add new animals and keep their information organized.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <Link href="/Pets">

                        <div className="w-72 h-48 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition cursor-pointer">

                            <h2 className="text-2xl font-bold text-slate-700 mb-3">
                                View Animals
                            </h2>

                            <p className="text-gray-500 text-center px-6">
                                View all animals currently registered in the shelter.
                            </p>

                        </div>

                    </Link>


                    <Link href="/Cadastro">

                        <div className="w-72 h-48 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition cursor-pointer">

                            <h2 className="text-2xl font-bold text-slate-700 mb-3">
                                Add Animal
                            </h2>

                            <p className="text-gray-500 text-center px-6">
                                Register a new animal in the shelter.
                            </p>

                        </div>

                    </Link>

                </div>

            </main>

        </div>
    );
}