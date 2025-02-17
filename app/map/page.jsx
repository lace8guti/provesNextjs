"use client"
export default function Page () {

   let botons = [
            <button key={1} className="bg-blue-500 p-2 m-2">Afegir</button> ,
            <button key={2} className="bg-blue-500 p-2 m-2">Afegir</button> ,
            <button key={3} className="bg-blue-500 p-2 m-2">Afegir</button>
            ]
   //return <div>{botons}</div>

   const elements = [
    <li key={1}>Poma</li> ,
    <li key={2}>Pera</li> ,
    <li key={3}>Plàtan</li> ,
    <li key={4}>Raïm</li>
   ]

   //return <ul>{elements}</ul>


   
/*
   let arrayFruites = [];

   for(let i=0; i<fruites.length; i++){
    arrayFruites.push(<li>{fruites[i]}</li>)
   }
   console.log(arrayFruites)
   return <ul>{arrayFruites}</ul>

*/

   const handleClick = (fruita,index) => {
    console.log(`Has fet click ${fruita}`);
    alert(`Has fet click ${index}`);

   }
   const fruites = ["Poma","Pera","Plàtan","Raïm"];


   return (

    <ul>
        { fruites.map( (fruita,index) => <li onClick={() =>handleClick(fruita,index)} key={index}>{fruita}</li>)}


    </ul>



   )





}