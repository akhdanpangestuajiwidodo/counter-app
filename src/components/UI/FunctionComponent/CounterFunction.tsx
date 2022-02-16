import {useState} from "react";
import '../../../styles/counter.css';
import { HeadingFunctionPage } from "../../elements/Heading/HeadingFunctionPage/HeadingFunctionPage";

function CounterFunction(){

    // Hook useState
    const [count, setCount] = useState(0);

    return (
    <div>
        <div>
            <HeadingFunctionPage />
            <p> {count} </p>
            <button onClick={() => setCount(count + 1)} className='increment'>
            Increment
            </button>
            <button onClick={() => setCount(count - 1)} className='decrement'>
            Decrement
            </button>
        </div>
    </div>
  );

}


export {CounterFunction};