import { useEffect, useState } from "react";
import './App.css';
import Post from './components/Post';

function App() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="App">
      <button onClick={() => settoggle(!toggle)} style={{padding:"20px 30px",marginTop:"5%",backgroundColor:"#3DC2EC",border:"none",borderRadius:"10px",fontWeight:"600"}}>
        {toggle ? "GET POSTS" : "HIDE POSTS"}
      </button>
      {toggle ? null:<Post /> }
      
    </div>
  );
}

export default App;
