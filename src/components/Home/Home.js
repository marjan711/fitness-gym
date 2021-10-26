import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Extra from '../Extra/Extra';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceContainer from '../ServiceContainer/ServiceContainer';
import Trainer from '../Trainers/Trainer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Extra></Extra>
           
            <ServiceContainer></ServiceContainer>
            <Trainer></Trainer>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;