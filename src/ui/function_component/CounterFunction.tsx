import React, {useState} from "react";
import '../../css/CounterFunction.css'

function CounterFunction(){

    // Hook useState
    const [count, setCount] = useState(0);
    
    return (
    <div>
      <p> {count} </p>
      <button onClick={() => setCount(count + 1)} className='increment'>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} className='decrement'>
        Decrement
      </button>
    </div>
  );

}


export {CounterFunction};