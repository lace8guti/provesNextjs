"use client";
import { useState } from "react";

export default function Page() {
  
  const [llista, setLlista] = useState([
    { nom: "Pep", edat: 25, password: "1234", email: "pep@gmail.com" },
    { nom: "Anna", edat: 30, password: "5678", email: "anna@gmail.com" },
  ]);

  const [nouUsuari, setNouUsuari] = useState({
    nom: "",
    edat: "",
    password: "",
    email: "",
  });

  // Funció per afegir un usuari nou
  const afegirUsuari = (e) => {
    e.preventDefault();
    if (nouUsuari.nom && nouUsuari.email) {
      setLlista([...llista, nouUsuari]);
      setNouUsuari({ nom: "", edat: "", password: "", email: "" }); // Reset
    }
  };

  // Funció per eliminar un usuari
  const eliminarUsuari = (index) => {
    setLlista(llista.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Llista d'Usuaris</h2>

      <ul className="mb-4">
        {llista.map((usuari, index) => (
          <li key={index} className="flex justify-between items-center border-b p-2">
            <span>{usuari.nom} ({usuari.email}) {usuari.edat} anys</span>
            <button
              onClick={() => eliminarUsuari(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {/* Formulari per afegir usuaris */}
      <form onSubmit={afegirUsuari} className="space-y-2">
        <input
          type="text"
          placeholder="Nom"
          value={nouUsuari.nom}
          onChange={(e) => setNouUsuari({ ...nouUsuari, nom: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={nouUsuari.email}
          onChange={(e) => setNouUsuari({ ...nouUsuari, email: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Edat"
          value={nouUsuari.edat}
          onChange={(e) => setNouUsuari({ ...nouUsuari, edat: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Afegir Usuari
        </button>
      </form>
    </div>
  );
}
