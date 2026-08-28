"use client";

import { useState } from "react";
import Header from "../components/Header";
import api from "../services/api"

export default function Cadastro() {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");

    // async function cadastrarPet(e:any) {
    //     e.preventDefault()

    //     try {
    //         const response = await api.post("/pets", {
    //             name,
    //             type,
    //             age:Number(age),
    //             breed
    //         })

async function cadastrarPet(e: React.FormEvent) {

    e.preventDefault()

    try {

        const response = await api.post("/pets", {
            name,
            type,
            age: Number(age),
            breed
        })

        console.log("Pet cadastrado:", response.data)

        alert("Animal registered successfully!")

        setName("")
        setType("")
        setAge("")
        setBreed("")

    } catch (error: any) {

        console.log("ERRO COMPLETO:", error)
        console.log("STATUS:", error.response?.status)
        console.log("RESPOSTA:", error.response?.data)
        console.log("URL:", error.config?.url)
        console.log("BASE URL:", error.config?.baseURL)

        alert("Error registering animal")
    }
}

    return (
        <div className="min-h-screen bg-gray-100">

            <Header />

            <main className="flex flex-col items-center py-16">

                <h1 className="text-4xl font-bold text-slate-700 mb-10">
                    Add Animal
                </h1>

                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

                    <div className="flex flex-col gap-5">

                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                            />
                        </div>


                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Type
                            </label>

                            <input
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                            />
                        </div>


                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Age
                            </label>

                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                            />
                        </div>


                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Breed
                            </label>

                            <input
                                type="text"
                                value={breed}
                                onChange={(e) => setBreed(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                            />
                        </div>


                        <button
                            onClick={cadastrarPet}
                            className="bg-slate-700 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition"
                        >
                            Register Animal
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}