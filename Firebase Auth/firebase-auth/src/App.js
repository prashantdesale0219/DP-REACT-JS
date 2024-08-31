
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <div className="App" style={{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center",margin:"10% auto"}}>
    <SignUpPage/>
    <LoginPage/>
    
    </div>
  );
}

export default App;
