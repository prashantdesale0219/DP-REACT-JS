import React, { useState } from 'react'

const StudentForm = () => {
         
    const  dataobj={
        name:'',
        email:'',
        password:'',
        select: '',
        gender:true
    }
    const [Studentdata,setStudentdata]=useState(dataobj)
    const {name,email,password,select}=Studentdata

  
   
    // console.log(dataobj);
   

    const studentinfo=(e)=>{
        setStudentdata({...Studentdata,[e.target.name]:e.target.value })
    }

    const submitdata =(e)=>{
        e.preventDefault()
        console.log(Studentdata)
    }
   
  return (
    <div>
        <form action="" onSubmit={(e)=>submitdata(e)}>
            <h1>STUDENT FORM</h1>
            <span>NAME:</span> &nbsp;
            <input type="text" name='name' value={name} onChange={(e)=>studentinfo(e)}   placeholder='ENTER YOUR FULL NAME '/> <br /><br />
            <span>EMAIL:</span> &nbsp;
            <input type="email" name='email' value={email} onChange={(e)=>studentinfo(e)} placeholder='ENTER YOUR EMAIL'/><br /><br />
            <span>PASSWORD:</span> &nbsp;
            <input type="password" name='password' value={password} onChange={(e)=>studentinfo(e)} placeholder='ENTER YOUR PASSWORD'/><br />
            <br />
            <select name="select" value={select} id="" onChange={(e)=>studentinfo(e)}>
                <option value="">Select Your Grade</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior </option>
                <option value="Senior">Senior</option>
            </select><br />
            <input type="radio" name="gender"  value="male" onChange={(e)=>studentinfo(e)}/>Male
            <br />
            <input type="radio" name="gender" value="female" onChange={(e)=>studentinfo(e)}/>Female
            <br />
            <input type="radio" name="gender" value="other" onChange={(e)=>studentinfo(e)}/>Other
            <br /><br />
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default StudentForm
