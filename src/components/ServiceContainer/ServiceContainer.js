import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServiceContainer.css';





const ServiceContainer = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
        
    },[]);
    
    return (
        <div>
            

             <div className="container">
                <h1 className="fw-bold c-text mt-5 mb-5">Services</h1>
            <div className="row">
            {
                        services.map(service =>(
                            
                            <div key={service.key} className="col-md-4 gy-md-5 gy-sm-4 gy-5">
                                 <div  className="card c-card border border-dark" >
                                         <img src={service.pic} className="card-img-top" alt="..."/>
                                     <div className="card-body">
                                             <h3 className="fw-bolder">{service.name}</h3>
                                             <hr />
                                       
                                         <h6>{service.info}</h6>
                                     
                                         <br/>
                                         <Link to={`/services/${service.key}`}>
                                         <button type="button" className="btn btn-success me-4 mb-md-1">More Details</button>
                                     
                                         <button type="button" className="btn btn-success mb-md-1">Join Now</button>
                                         </Link>
                                     </div>
                                 </div>
                             </div>
                            
                            ))
                    }
            </div>
                
                
                
        
                
                    
                
            </div>
            
                         
                                  
                            
            
            
        </div>
    );
};

export default ServiceContainer;