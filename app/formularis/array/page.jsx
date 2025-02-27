"use client"
import { useState } from "react";

export default function Page() {
  const cuinesInicials = [
    { nom: "Italiana", descripcio: "pasta i pizza", nivell: 8, vegana: false },
    { nom: "Japonesa", descripcio: "sushi i sashimi", nivell: 9, vegana: false },
    { nom: "Mexicana", descripcio: "tacos i guacamole", nivell: 7, vegana: true },
  ];

  const [cuines, setCuines] = useState(cuinesInicials);
  const [novaCuina, setNovaCuina] = useState({
    nom: "",
    descripcio: "",
    nivell: 10,
    vegana: true,
  });
  const [cuinaEditant, setCuinaEditant] = useState(null); // Índex de la cuina que s'està editant

  const[busqueda, setBusqueda] = useState("");

  

  const afegirOEditarCuina = (e) => {
    e.preventDefault(); // Evita que el formulari recarregui la pàgina
    if (cuinaEditant !== null) {
      // 🔹 Si s'està editant una cuina existent...
      const novesCuines = [...cuines];  // Copiem l'array actual de cuines
      novesCuines[cuinaEditant] = novaCuina; // Substituïm la cuina editada
      setCuines(novesCuines); // Actualitzem l'estat amb la nova llista
      setCuinaEditant(null); // Sortim del mode edició
    } else {  
      // 🔹 Si s'està afegint una nova cuina...
      setCuines([...cuines, novaCuina]); // Afegim la nova cuina a la llista
    }
    // 🔹 Reinicialitzem el formulari després d'afegir o editar
    setNovaCuina({ nom: "", descripcio: "", nivell: 10, vegana: true });
  };

  const editarCuina = (index) => {
    setNovaCuina(cuines[index]); // Omplir el formulari amb la cuina seleccionada
    setCuinaEditant(index); // Guardar quin element s'està editant
  };

  const eliminarCuina = (index) => {
    setCuines(cuines.filter((_, i) => i !== index));
  };

  const buscar = (e) => {
    setBusqueda(e.target.value);
  }

  const cuinesFiltrades = cuines.filter(cuina =>
    cuina.nom.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg mb-4 mt-2">
      <input type="text" className="m-2 p-2 border-2 solid border-gray-400" placeholder="Busca una cuina"
      value={busqueda} onChange={buscar} />

      <ul className="p-4 m-3 border-2 solid rounded-xl bg-lime-200 font-medium">
        {busqueda === "" ? (
          <p>No hi ha cap cuina. Fes una cerca.</p>
        ) : cuinesFiltrades.length > 0 ? (
          cuinesFiltrades.map((cuina, index) => (
            <li key={index}>{cuina.nom}, {cuina.descripcio}, nivell {cuina.nivell}, {cuina.vegana ? "Vegana" : "No vegana"}</li>
          ))
        ) : (
          <p>No s'ha trobat cap cuina.</p>
        )}
      </ul>


      <h2 className="text-xl font-bold mt-2">Llista de cuines</h2>

      <ul className="mb-4">
        {cuines.map((cuina, index) => (
          <li key={index} className="flex justify-between items-center border-b p-2">
            <span>{cuina.nom}, {cuina.descripcio}, nivell {cuina.nivell}, {cuina.vegana ? "Vegana" : "No vegana"}</span>
            <div className="space-x-2">
              <button
                onClick={() => editarCuina(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                ✏️
              </button>
              <button
                onClick={() => eliminarCuina(index)}
                className="bg-blue-300 mt-2 text-white px-2 py-1 rounded"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Formulari per afegir o editar cuines */}
      <h3 className="text-lg font-bold mb-2">{cuinaEditant !== null ? "Editar cuina" : "Afegir nova cuina"}</h3>
      <form onSubmit={afegirOEditarCuina} className="space-y-2">
        <input
          type="text"
          placeholder="Nom"
          value={novaCuina.nom}
          onChange={(e) => setNovaCuina({ ...novaCuina, nom: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Descripció"
          value={novaCuina.descripcio}
          onChange={(e) => setNovaCuina({ ...novaCuina, descripcio: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Nivell"
          value={novaCuina.nivell}
          onChange={(e) => setNovaCuina({ ...novaCuina, nivell: Number(e.target.value) })}
          className="border p-2 w-full"
          required
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={novaCuina.vegana}
            onChange={(e) => setNovaCuina({ ...novaCuina, vegana: e.target.checked })}
          />
          <span>Vegana</span>
        </label>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {cuinaEditant !== null ? "Guardar canvis" : "Afegir cuina"}
        </button>
      </form>
    </div>
  );
}
