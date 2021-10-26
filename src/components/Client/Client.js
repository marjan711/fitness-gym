import React from 'react';
import pic1 from '../../images/clients/c1.jpg'
import pic2 from '../../images/clients/c2.jpg'
import pic3 from '../../images/clients/c3.jpg'
import pic4 from '../../images/clients/c4.jpg'



const Client = () => {
    return (
        <div className="container">
            <h1 className="fw-bolder c-text mt-5 mb-5">Our Clients</h1>
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={pic1} className="img-fluid rounded-start mt-4" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">KENNETH WILSON</h5>
                            <p className="card-text">"I love sports and I have been working out since I was young (teens). I had always been in fit condition – I had a very active life both at work as well as my hobby with sports and solo traveling. I enjoy scuba diving, marathon, hiking, sky diving, as well the weight training"</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={pic2} className="img-fluid rounded-start mt-4" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">SARAH NELSON</h5>
                            <p className="card-text">"I love sports and I have been working out since I was young (teens). I had always been in fit condition – I had a very active life both at work as well as my hobby with sports and solo traveling. I enjoy scuba diving, marathon, hiking, sky diving, as well the weight training"</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={pic3} className="img-fluid rounded-start mt-4" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">JANE SMITH</h5>
                            <p className="card-text">"I love sports and I have been working out since I was young (teens). I had always been in fit condition – I had a very active life both at work as well as my hobby with sports and solo traveling. I enjoy scuba diving, marathon, hiking, sky diving, as well the weight training"</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
            <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={pic4} className="img-fluid rounded-start mt-4" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder">GEORGE MILLER</h5>
                            <p className="card-text">"I love sports and I have been working out since I was young (teens). I had always been in fit condition – I had a very active life both at work as well as my hobby with sports and solo traveling. I enjoy scuba diving, marathon, hiking, sky diving, as well the weight training"</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            
           
        </div>
    );
};

export default Client;