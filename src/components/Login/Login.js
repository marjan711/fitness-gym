import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css'



const Login = () => {
   
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const {signInUsingGoogle,error,handleUserLogin }=useAuth();
    const location =useLocation();
    const history =useHistory();
    const redirect_url =location.state?.from || '/home'


    // for redirect desire location using gmail
    
    const handleGoogleLogIn =()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_url)
        })
    } 
    
    
    

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const handleLogin = () => {
        handleUserLogin(email,password);
      };
    
   
    return (
        <div>
            
            <Header></Header>
           <div className=" container login-box mt-5">
               
               <div className="row">
                   <div className="col c-style">
                   <h1 className="fw-bolder text-white">Please <span>Login</span></h1>
                   <div  className="mt-5 p-5 mb-5">
                        <div className="mb-2 w-50 mx-auto">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                            <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        
                        <div className="mb-2 w-50 mx-auto ">
                            <label  htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                    
                        <input onClick={handleLogin} value="Login" type="submit" className="btn btn-primary mt-2"/>
                        <br />
                        <br />
                        <button className="btn btn-success" onClick={ handleGoogleLogIn}>Google</button>
                        <h5 className="text-danger fw-bolder mb-3">{error}</h5>
                        <Link to='./register'>
                           <p>Create New  Account?</p>
                        </Link>
                </div>
                   </div>
            </div>
           
           

            

           
            
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Login;