import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Button from './components/Button'
import { useContext } from 'react'
import { theamcont } from './context/Theamcontext'
function App() {

  const {theam}=useContext(theamcont)
  

  return (
    <>
      <div style={{backgroundColor:theam=="light"? "white":"black",color:theam=="light"? "black":"white",height:"90vh",width:"100%",margin:"0"}}>
      <Navbar />
      <Content />
      <Button />
      </div>
      
      
    </>
  )
}

export default App
