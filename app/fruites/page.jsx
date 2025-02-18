"use client"
import { useState } from 'react';

export default function Page(){
    const fruites = ["Poma","Pera","Plàtan","Raïm"];
    const [llistaFruites, setLlistaFruites] = useState(fruites);

    const handleClick = (fruita,index) => {
        //console.log(`Has fet click ${fruita}`);
        //console.log(`Has fet click ${index}`);
        let llista = [...llistaFruites]
        //usando filter
        llista = llista.filter ( (fruit) => fruit!=fruita)
        //usando slice
        // llista = llista.slice
        //llista[0]="Prèssec"
        setLlistaFruites(llista);

       }

    
    
       return (
    
        <ul>
            { llistaFruites.map( (fruita,index) => 
            <li onClick={() =>handleClick(fruita,index)} key={index}>
                {fruita}
            </li>)}
    
    
        </ul>
       )
    }