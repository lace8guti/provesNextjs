import Saludo from "./Component1";
import Boton from "./Boton";

export default function Page(){
    return (
        <>
        <div>
            <Saludo nombre="Lucas" />
            <Saludo nombre="Maria" />
            <Saludo />  {/* Aquí no se pasa nombre, así que usará "desconegut" */}
        </div>

        <Boton color="bg-blue-500">Botón azul</Boton>
        <Boton color="bg-red-500">Botón rojo</Boton>
        <Boton color="bg-green-500">Botón verde</Boton>




        </>
    );
}

