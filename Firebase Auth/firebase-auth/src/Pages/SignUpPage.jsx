import React, { useState } from 'react';
import { createUserWithEmailAndPassword} from 'firebase/auth';

import { auth, provider } from '../Services/firebase';






const SignUpPage = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const { firstName, lastName, email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signUpFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Your Account Is Created Successfully");
      setFormData(initialFormData);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } 
  };

return (
  <div className='forms'>
    
      <div className="FormsLoginBtn">
    
        <form className="LoginForm" onSubmit={signUpFormSubmit}>
        <h2>SIGN UP</h2>
          <input type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleInputChange} />
          <input type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleInputChange} />
       
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={handleInputChange} />
          <input type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
          <button type="submit" className="SubmitBtn"> SUBMIT</button>
        </form>
      </div>
  </div>
)
}

export default SignUpPage
