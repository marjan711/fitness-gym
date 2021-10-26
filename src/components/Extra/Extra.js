import React from 'react';
import './Extra.css'
import pic from '../../images/pack7.jpg'
import pic2 from '../../images/running.jpg'
import { Link } from 'react-router-dom';

const Extra = () => {
    return (
        <div className="container-fluid" >
            <div className="row c-section pt-5 pb-5">
                
               
                    <div className="col-md-6 ">
                        <h2 className="fw-bolder c-text mt-4">OUR PHILOSOPHY</h2>
                        <h5 className="fw-bold text-white mt-5 mb-4">as summarised in our philosophy and mission statement we believe that the potential to achieve any desired health and fitness goal lies within each and every one. 💪</h5>
                        <Link to='./login'>
                        <button className="btn c-btn btn-lg mb-4">More About US</button>
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <img src={pic} alt="" />
                    </div>
               
            </div>
            
            <div className="row c-section mt-3 mb-3">

            <div className="col-md-6">
                    <img className="img-fluid" src={pic2} alt="" />
            </div>

            <div className="col-md-6">
                <h2 className="fw-bolder c-text mt-4">Personal Training</h2>
                <h5 className="fw-bold text-white mt-5 mb-4">the scope of practice for a personal trainer has a primary focus on prevention and involves enhancing components of health and fitness for the general, healthy population or those cleared for exercise.</h5>
                <Link to='./services'>
                        <button className="btn btn-lg c-btn mb-4">Choose Yours</button>
                        </Link>
            </div>

            </div>
        </div>
    );
};

export default Extra;