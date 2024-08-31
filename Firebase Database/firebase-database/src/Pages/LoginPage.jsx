
import React, { useState } from 'react';
import {  deleteUser, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { BiLogOut } from 'react-icons/bi';
import { auth, provider } from '../Services/Firebase';


const LoginPage = () =>{
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  const [formData, setFormData] = useState(initialFormData);
  const {email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signInFormSubmit = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login Successfully');
        setFormData(initialFormData);
      } catch (err) {
        console.error(err);
        alert(err.message);
      } 
    };
  
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, provider);
        alert('Login Successfully with Google');
      } catch (err) {
        console.error(err);
        alert(err.message);
      } 
    };
  
    const signOutUser = async () => {
      const user = auth.currentUser;
        if (user) {
          deleteUser(user).then(() => {
            alert("User account deleted");
          }).catch((error) => {
            console.log("Error during account deletion:", error);
            alert("Failed to delete user account");
          });
        } else {
          alert("No user is currently signed in");
        }
    };
  
return (
  <div>
    <div className="FormsLoginBtn">
        <form className="LoginForm" onSubmit={signInFormSubmit}>
          <h2>SIGN IN</h2>
          <input type="email" placeholder="Enter Your Email" name="email" value={email} onChange={handleInputChange} />
          <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={handleInputChange} />
          <div className="btnSignUp">
            <button type="submit" className="SubmitBtn">SUBMIT</button>
            <button type="button" onClick={signOutUser} className="btnLogout"><BiLogOut />Logout</button>
          </div>
          <h4>Or</h4>
          <GoogleButton onClick={signInWithGoogle} style={{ display: "block", margin: "auto", borderRadius: "5px" }} />
        </form>
      </div>
  </div>
)
}

export default LoginPage
