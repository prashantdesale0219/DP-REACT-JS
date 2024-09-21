
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../Context/AuthContextApi'
import Loader from '../Components/Loader'

function Login() {
  const [email,setemail]= useState('')
  const [password,setpassword]= useState('')
  const [isload,setIsLoad] = useState(false)
  const {loginUser} = useContext(AuthContext)
  const handleSubmit= (e)=>{
    e.preventDefault()
    const userdata={email,password}
    setIsLoad(true)
    axios.post('https://reqres.in/api/login',userdata).then(res=>{
      const token = res.data.token
      loginUser(token)
      setIsLoad(false)
    }).catch(err=>console.log(err))
  }
  return isload ? <Loader/>:(
    <div>
      <form data-testid="login-form"  onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email"  name="username" value={email} onChange={(e)=>setemail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password" value={password} onChange={(e)=>setpassword(e.target.value)} 
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
