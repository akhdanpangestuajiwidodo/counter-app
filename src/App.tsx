import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ui/function_component/CounterFunction'
import {CounterFunction} from './ui/function_component/CounterFunction';

function App() {
  return (
    <div className="App">
      <CounterFunction />
    </div>
  );
}

export default App;
