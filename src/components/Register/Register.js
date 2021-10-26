import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const {createUser,error,signInUsingGoogle}=useAuth();

    
    
    const handleName=(e)=>{
        setName(e.target.value);
        console.log(e.target.value)
        
    }


    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleRegister = () => {
        createUser(email, password,name);
        
        
    }

    

    
 
    return (
        <div>
             <Header></Header>
           <div className=" container login-box mt-5">
               
               <div className="row">
                   
                   <div className="col c-style">
                   <h1 className="fw-bolder text-white">Please <span>Register</span></h1>
                   <div  className="mt-5 p-5 mb-5">
                        <div className="mb-2 w-50 mx-auto">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
                            <input onBlur={handleName} type="name" className="form-control" required/>
                            
                        </div>

                        <div className="mb-2 w-50 mx-auto">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                            <input onBlur={handleEmail}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            
                        </div>
                        
                        <div className="mb-2 w-50 mx-auto ">
                            <label  htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" required />
                        </div>
                    
                        <input onClick={handleRegister}  value="Submit" type="submit" className="btn btn-primary mt-2"/>
                        <br />
                        <br />
                        <button onClick={signInUsingGoogle} className="btn btn-success mb-4" >Google</button>

                        <h5 className="text-danger fw-bolder mb-3">{error}</h5>
                        

                        <Link to='./login'>
                           <>Already Have Account?</>
                        </Link>
                </div>
                
                   </div>
            </div>
           
           

            

           
            
           </div>
           <Footer></Footer>
        
        </div>
    );
};

export default Register;