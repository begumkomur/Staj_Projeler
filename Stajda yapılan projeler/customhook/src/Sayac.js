import React from 'react';
import useCounter from './useCounter';

function Sayac() {
  const [num, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h2>Sayı = {num}</h2>
      <button className='BTN' onClick={increment}>Arttır</button>
      <button className='BTN' onClick={decrement}>Azalt</button>
      <button className='BTN' onClick={reset}>Sıfırla</button>
    </div>
  );
}

export default Sayac;
