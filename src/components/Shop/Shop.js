import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const star = <FontAwesomeIcon icon={faStar} />

const Shop = () => {
    return (
        <div>
                <Header></Header>
                <div className="container">
                <h1 className="fw-bolder c-text mt-5 mb-5">Choose Your Product</h1>
                
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="https://i.ibb.co/0BBkR8z/pdt13.jpg" className="img-fluid rounded-start " alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title fw-bolder">Gloves</h3>
                                <br /> 
                                <p className="text-warning">{star} {star} {star} {star} {star}</p>
                                    
                            </div>
                            <h5 className="fw-bolder"><span className="text-danger" >$</span>1500</h5>
                            <br />
                            <button className="btn c-btn mb-5">Buy Now</button>
                            <button className="btn btn-success mb-5 ms-4">View Details</button>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="https://i.ibb.co/nsnVBwF/pdt14.jpg" className="img-fluid rounded-start mt-5 ms-md-4 mb-5" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">Skipping Rope</h5>
                                <br />
                                <p className="text-warning">{star} {star} {star} {star} {star}</p>
                                
                            </div>

                            <h5 className="fw-bolder"><span className="text-danger" >$</span>900</h5>
                            <br />
                            <button className="btn c-btn mb-5">Buy Now</button>
                            <button className="btn btn-success mb-5 ms-4">View Details</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="https://i.ibb.co/4NzFMZK/hoodie-7-front.jpg" className="img-fluid rounded-start mt-5 ms-md-4 mb-5" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">GYM HOODY</h5>
                                <br />
                                <p className="text-warning">{star} {star} {star} {star} {star}</p>
                                
                                
                            </div>
                            <h5 className="fw-bolder"><span className="text-danger" >$</span>700</h5>
                            <br />
                            <button className="btn c-btn mb-5">Buy Now</button>
                            <button className="btn btn-success mb-5 ms-4">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="https://i.ibb.co/MRW1NN0/pdt12.jpg" className="img-fluid rounded-start mt-5 ms-md-4 mb-5" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">SOFT DUMBLES</h5>
                                <br />
                                <p className="text-warning">{star} {star} {star} {star} {star}</p>
                                
                                
                                
                            </div>
                                <h5 className="fw-bolder"><span className="text-danger" >$</span>1400</h5>
                                <br />
                                <button className="btn c-btn mb-5">Buy Now</button>
                                <button className="btn btn-success mb-5 ms-4">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="https://i.ibb.co/NVdkc4q/pdt15.jpg" className="img-fluid rounded-start mt-5 ms-md-4 mb-5" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">Yoga Mat</h5>
                                <br />
                                <p className="text-warning">{star} {star} {star} {star} {star}</p>
                                
                            </div>
                                <h5 className="fw-bolder"><span className="text-danger" >$</span>2400</h5>
                                    <br />
                                    <button className="btn c-btn mb-5">BUY NOW</button>
                                    <button className="btn btn-success mb-5 ms-4">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src="https://i.ibb.co/Q8C19Fv/pdt3.jpg" className="img-fluid rounded-start mt-5 ms-md-4 mb-5" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">SKIPPING ROPE</h5>
                                <br />
                                <p className="text-warning">{star} {star} {star} {star} {star}</p>
                                
                                
                            </div>
                                <h5 className="fw-bolder"><span className="text-danger" >$</span>2400</h5>
                                        <br />
                                        <button className="btn c-btn mb-5">BUY NOW</button>
                                        <button className="btn btn-success mb-5 ms-4">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            

            <Footer></Footer>
           
        </div>
    );
};

export default Shop;