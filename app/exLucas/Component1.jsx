/*
📌 Explicación:
1. { nombre } dentro de los {} indica que estamos desestructurando el prop nombre.
2. Si nombre tiene un valor, lo muestra.
3. Si nombre es undefined o null, muestra "desconegut" en su lugar.
*/

export default function Saludo ({nombre}){
    return <h1>Hola,{nombre ? nombre : "desconegut"}!</h1>
}