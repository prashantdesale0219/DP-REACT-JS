import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const[toggle,settoggle]=useState(false)
  return (
    <div className="App" >
      {toggle?"":<Counter />}
      <button style={{position:"absolute",top:"68%",left:"45%",padding:"10px 20px",borderRadius:"20px",backgroundColor:"#FFE8C8"}}
      onClick={() => settoggle(!toggle)} > {toggle ? "SHOW COUNTER" : "HIDE COUNTER"}</button>
    </div>
  );
}

export default App;
