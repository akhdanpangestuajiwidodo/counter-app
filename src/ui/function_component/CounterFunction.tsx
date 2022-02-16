import React, {useState} from "react";

function CounterFunction(){

    // Hook useState
    const [count, setCount] = useState(0);

    //Fungsi untuk penambahan
    const addition = () => setCount(count + 1);

    //Fungsi untuk pengurangan
    const subtraction = () => setCount(count - 1);

    return (
    <div>
      <p> {count} </p>
      <button onClick={addition}>
        Increment
      </button>
      <button onClick={subtraction}>
        Decrement
      </button>
    </div>
  );

}


export {CounterFunction};