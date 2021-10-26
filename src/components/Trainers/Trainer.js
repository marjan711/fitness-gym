import React, { useEffect, useState } from 'react';

const Trainer = () => {
    const [trainers,setTrainer]=useState([])
    useEffect(()=>{
        fetch('./fakeTrainer.json')
        .then(res=>res.json())
        .then(data=>setTrainer(data))
    },[])
    return (
        <div>
            <h1 className="fw-bold c-text mt-5">Our Trainers</h1>
           <div className="container">
               <div className="row">
                   {
                       trainers.map(trainer=>(
                        <div key={trainer.key} className="col-md-4 gy-md-5 gy-sm-4 gy-5">

                                <div  className="card  border border-dark" >
                                         <img src={trainer.pic} className="card-img-top" alt="..."/>
                                     <div className="card-body">
                                         <h3  className="fw-bold">{trainer.name}</h3>
                                            <h4>{trainer.occ}</h4>
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

export default Trainer;