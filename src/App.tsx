import React, {useState} from "react";
import './App.css';
import './components/UI/FunctionComponent/CounterFunction'
import {CounterClass} from './components/UI/ClassComponent/CounterClass'
import {CounterFunction} from './components/UI/FunctionComponent/CounterFunction';

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
