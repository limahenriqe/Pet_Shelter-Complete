"use client";

import { useEffect, useState } from "react";
import api from "../services/api"
import Header from "../components/Header";

interface Pet {
    id: number;
    name: string;
    type: string;
    age: number;
    breed: string;
}

export default function Pets() {

    const [pets, setPets] = useState<Pet[]>([]);

    const [editandoId, setEditandoId] = useState<number | null>(null);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");


    const listarPets = async () => {

        try {

            const response = await api.get("/pets");
            setPets(response.data);

        } catch (error) {
            console.log(error);
        }
    };


    async function excluirPet (id:number) {

        try {

            await api.delete(`/pets/${id}`);

            setPets((prev) =>
               prev.filter((pet) => pet.id !== id)
            )

        } catch (error) {
            console.log(error);
            alert("Error deleting animal");
        }
    };


    const iniciarEdicao = (pet: Pet) => {

        setEditandoId(pet.id);

        setName(pet.name);
        setType(pet.type);
        setAge(String(pet.age));
        setBreed(pet.breed);
    };


    const atualizarPet = async (id: number) => {

        try {

            await api.put(`/pets/${id}`, {
                    name: name,
                    type: type,
                    age: Number(age),
                    breed: breed
                }
            );

            alert("Animal updated successfully!");
            setEditandoId(null);
            listarPets();

        } catch (error) {
            console.log(error);
            alert("Error updating animal");
        }
    };

    useEffect(() => {
        listarPets()
    }, [])

    const cancelarEdicao = () => {

        setEditandoId(null);

        setName("");
        setType("");
        setAge("");
        setBreed("");
    };


    return (
        <div className="min-h-screen bg-gray-100">

            <Header />

            <main className="px-10 py-16">

                <h1 className="text-4xl font-bold text-slate-700 text-center mb-12">
                    Animals
                </h1>


                {pets.length === 0 ? (

                    <p className="text-center text-gray-500 text-lg">
                        No animals registered.
                    </p>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                        {pets.map((pet) => (

                            <div
                                key={pet.id}
                                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
                            >

                                {editandoId === pet.id ? (

                                    <div className="flex flex-col gap-3">

                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Name"
                                            className="border rounded-lg p-2 text-gray-900"
                                        />

                                        <input
                                            type="text"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            placeholder="Type"
                                            className="border rounded-lg p-2 text-gray-900"
                                        />

                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            placeholder="Age"
                                            className="border rounded-lg p-2 text-gray-900"
                                        />

                                        <input
                                            type="text"
                                            value={breed}
                                            onChange={(e) => setBreed(e.target.value)}
                                            placeholder="Breed"
                                            className="border rounded-lg p-2 text-gray-900"
                                        />


                                        <button
                                            onClick={() => atualizarPet(pet.id)}
                                            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                                        >
                                            Save
                                        </button>


                                        <button
                                            onClick={cancelarEdicao}
                                            className="bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"
                                        >
                                            Cancel
                                        </button>

                                    </div>

                                ) : (

                                    <>

                                        <h2 className="text-2xl font-bold text-slate-700 mb-4">
                                            {pet.name}
                                        </h2>


                                        <div className="space-y-2 text-gray-600 mb-6">

                                            <p>
                                                <strong>Type:</strong> {pet.type}
                                            </p>

                                            <p>
                                                <strong>Age:</strong> {pet.age}
                                            </p>

                                            <p>
                                                <strong>Breed:</strong> {pet.breed}
                                            </p>

                                        </div>


                                        <div className="flex gap-3">

                                            <button
                                                onClick={() => iniciarEdicao(pet)}
                                                className="flex-1 bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-800"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => excluirPet(pet.id)}
                                                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </>

                                )}

                            </div>

                        ))}

                    </div>

                )}

            </main>

        </div>
    );
}