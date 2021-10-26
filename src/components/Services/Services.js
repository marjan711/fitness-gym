import React from 'react';
import './Services.css'
import 'animate.css';
import ServiceContainer from '../ServiceContainer/ServiceContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';






const Services = () => {
    
    return (
        
        <div>
            <Header></Header>
            {/* banner div */}
            <div className=" services-banner mb-2">
                  
                      <div className="ms-5 ">
                          <br />
                          <br />
                          <br />
                          <br />
                          
                          <h1 className=" text-start c-color fw-bold animate__animated animate__slideInLeft animate__slow">GET INTO SHAPE,NOW<span>!</span></h1>
                          <h2 className="text-start c-color  animate__animated animate__slideInLeft animate__slower">GET COMMITTED <span className="fw-bold" >START EXERCISE!</span> </h2>
                          <br>
                          </br>
                          <div className="d-flex animate__animated animate__slideInLeft animate__slower">
                          <button className=" mb-5 btn c-btn justify-start">START TRAINING</button>
                          </div>
                          <br />
                          <br />
                          <br />
                          <h1 className=" mt-5 text-start animate__animated animate__slideInLeft animate__slow c-color c-anim  fw-bolder">Explore Our Site</h1>
                          <h1 className="text-start animate__animated animate__slideInLeft animate__slow c-color c-anim fw-bolder" ><span className="fw-bolder">Grab</span> The Best Service</h1>
                      </div>
                   
                   
            </div>
                {/* services */}

                <ServiceContainer></ServiceContainer>
                <Footer></Footer>
            
        </div>
    );
};

export default Services;