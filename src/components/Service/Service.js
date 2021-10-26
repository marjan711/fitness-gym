import React, { useEffect, useState } from 'react';
import {   Link, useParams
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const element = <FontAwesomeIcon icon={faArrowRight} />

const Service = () => {
    let {serviceId}=useParams();
    
    const [soloService,setSoloService]=useState([]);
    useEffect(()=>{
        fetch('https://marjan711.github.io/jsonapi/services.json')
        .then(res=>res.json())
        .then(data=>setSoloService(data))
        
    },[])
    const selectService =soloService.find(serinfo=>serviceId===serinfo.key)
   
    
    
    return (
       
       <div>
            <Header></Header>
           <div className="container">
           
           {
               selectService &&
               <div className="container">
                   <div className="row">
                       <h1 className="fw-bolder mb-4 c-text">{selectService.name}</h1>
                   <div className="col-md-8">

                        <div className="col-md-12">
                            <img className="img-fluid" src={selectService.banner} alt="" />
                        </div>

                        <div className="col-md-12 mt-4 border border-dark">
                            <h6 className="p-5 fw-bold text-white">{selectService.info}</h6>
                            
                                         
                        </div>
                   </div>

                   <div className="col-md-4">
                       
                                         
                                        <h6 className="text-white">{element} Fitness testing,Diet Plan,Regular Observation</h6> 
                                        <br/>
                                         <h6 className="text-white">{element} Weekly  Motivation and Accountability On </h6>
                                         <br />
                                         <h6 className="text-white">{element} Ongoing Nutrition & support 24/7 Regular</h6>
                                         <br/>
                                         <h6 className="text-white">{element} Training Calendars Regularly Running  </h6>
                                         <br />
                                         <h6 className="text-white">{element} Free Wifi & Community Support Anytime</h6>

                                         <br />
                                         <br />
                                         <hr />
                                         <Link to="/login">
                                         <button className="btn c-btn">Join Now</button>
                                         </Link>
                       
                                         
                   </div>
               </div>
               </div>
           }
       </div>
       <Footer></Footer>
       </div>
    );
};

export default Service;