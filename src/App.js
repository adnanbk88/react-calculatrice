import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (

    <div className="App">
      
      <Calculator />

      <div className="personal-info">
          <h2>Adnane Bakkou</h2>
          <p>Niveau: 4IIR G5</p>
          <p>École: EMSI Maarif</p>
          <a href="https://bakkou.ma" target="_blank" rel="noopener noreferrer">Site Web: bakkou.ma</a>
      </div>
    </div>
  );
}



export default App;
