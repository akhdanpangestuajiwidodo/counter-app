import React, {useState} from "react";
import './App.css';
import './ui/function_component/CounterFunction'
import CounterClass from './ui/class_component/CounterClass'
import {CounterFunction} from './ui/function_component/CounterFunction';

function App() {

  let [isToggleOn, setState] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setState(!isToggleOn)}>
        {isToggleOn ? 'Ke Class Component' : ' Ke Function Component'}
      </button>
      <div>
        {isToggleOn ? <CounterFunction /> : <CounterClass />}
      </div>
    </div>
  );
}

export default App;
