import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import 'animate.css';
import banner1 from '../../images/banners/b1.jpg'
import banner2 from '../../images/banners/b2.jpg'
import banner3 from '../../images/banners/b3.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom "
                    src={banner1}
                    alt="First slide"
                    />         
                    <Carousel.Caption>
                    
                    <h1 className="fw-bolder  animate__animated animate__slideInLeft animate__slow">WELCOME TO  <span className="fw-bolder">X-71</span></h1>
                    <br/>
                    <br/>
                    <h1 className="fw-bolder  animate__animated animate__slideInLeft animate__slower">BE A FITNESS <span className="fw-bolder">FREAK</span></h1>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className="fw-bolder  animate__animated animate__flash animate__slow">SHAPE  <span className="fw-bolder">YOUR BODY</span> </h1>
                    <br />
                    <br />
                    <Link to="/login">
                        <button className="btn c-btn btn-lg">JOIN US</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className="fw-bolder  animate__animated animate__flash animate__slow">FITNESS WORKOUT<span className="fw-bolder"> PROGRAM</span> </h1>
                    <Link to="/login">
                        <button className="btn c-btn btn-lg">SET YOUR SCHEDULE</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;