"use client"
import { useState } from 'react';

export default function Page(){
    return<MyButton></MyButton>
}

function MyButton() {
    const [count, setCount] = useState(0);
    const [estat, setEstat] = useState(true);

  
    function handleClick() {
      setCount(count + 1);
    }
    const handleClickParking = () => {
        setEstat(!estat);

    }
  
    return (
        <div className='flex flex-col space-y-4'>
      <button onClick={handleClick} className='bg-blue-200'>
        Hiciste clic {count} veces
      </button>
      {count}
      <button onClick={handleClickParking} className= {estat ? 'bg-red-800' : 'bg-blue-200'}>
        {estat ? 'Tancar' : 'Obrir'}
      </button>
      Estat del pàrking:{estat ? 'obert' : 'tancat'}
      </div>   
    );
  }

  //return <h1>Hola,{nombre ? nombre : "desconegut"}!</h1>

