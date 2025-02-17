export default function Page(){

const age = 12;

if(age>=18){
    console.log('major edat')

}else{
    console.log('menor edat')
}

const beguda = age>=21 ? "cervesa" : "suc";


// creamos una constante objeto literal
const persona = null //const persona = {nom:"Ana", edat:19}
//evaluamos si la variable persona existe o no, si existe, toma su variable nom, si no existe, muestra "desconegut" per pantalla
const quies = persona ? persona.nom : "desconegut"
console.log(quies)



//const operacio = "eliminar"


// ejemplo de elemento contenido en una variable que se puede llamar en un return
//let boto = <button className="bg-blue-500 p-2">Afegir</button>


//if (operacio == "eliminar") boto = <button className="bg-red-500 p-2">Eliminar</button>

const operacio = 'afegir'

//if(operacio==="afegir") return <button className="bg-blue-500 p-2">Afegir</button>
//else return <button className="bg-red-500 p-2">Eliminar</button>

//return <div>{boto}</div>

/*
//dentro de un return no puedo utilizar la sintaxis de if-else a pelo, pero sí puedo meterle el operador ternario
return (
    operacio==="afegir" ?
    <button className="bg-blue-500 p-2">Afegir</button>
    :
    <button className="bg-red-500 p-2">Eliminar</button>
)
    */

return (
    <div>
    {persona && persona.nom}
    { operacio==="afegir" ?
    <button className="bg-blue-500 p-2">Afegir</button>
    :
    <button className="bg-red-500 p-2">Eliminar</button>
    }
    </div>
)

}