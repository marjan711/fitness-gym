import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="img-fluid " src="https://i.ibb.co/McrKQqV/post1.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h4 className="text-white fw-bold mt-5">Weight Training is the Key</h4>
                        <p className="text-white pt-5">To begin strengthening your muscles you need to engage in resistance training. This involves performing a series of exercises where you lift a weight that you are unaccustomed to for a specific amount of repetitions. This type of training can provide significant functional benefits and improvements in overall health and well-being. These improvements include: increased bone density, improved muscle mass and joint function, reduced potential for injury, increased metabolism and improved cardiac function.</p>
                        <br />
                        <button className="btn btn-success">READ MORE</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="img-fluid " src="https://i.ibb.co/v3PQkQg/post7.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h4 className="text-white fw-bold mt-5">SIT UP BENCH AB CRUNCHER</h4>
                        <p className="text-white pt-5">To begin strengthening your muscles you need to engage in resistance training. This involves performing a series of exercises where you lift a weight that you are unaccustomed to for a specific amount of repetitions. This type of training can provide significant functional benefits and improvements in overall health and well-being. These improvements include: increased bone density, improved muscle mass and joint function, reduced potential for injury, increased metabolism and improved cardiac function.</p>
                        <br />
                        <button className="btn btn-success">READ MORE</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-6">
                        <img className="img-fluid " src="https://i.ibb.co/fvhS8px/post3.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h4 className="text-white fw-bold mt-5">AEROBICS AND STRETCHING EXERCISES</h4>
                        <p className="text-white pt-5">To begin strengthening your muscles you need to engage in resistance training. This involves performing a series of exercises where you lift a weight that you are unaccustomed to for a specific amount of repetitions. This type of training can provide significant functional benefits and improvements in overall health and well-being. These improvements include: increased bone density, improved muscle mass and joint function, reduced potential for injury, increased metabolism and improved cardiac function.</p>
                        <br />
                        <button className="btn btn-success">READ MORE</button>
                    </div>
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col-6">
                        <img className="img-fluid " src="https://i.ibb.co/kMc2QvL/post5.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h4 className="text-white fw-bold mt-5">HOW TO USE A TREADMILL?</h4>
                        <p className="text-white pt-5">To begin strengthening your muscles you need to engage in resistance training. This involves performing a series of exercises where you lift a weight that you are unaccustomed to for a specific amount of repetitions. This type of training can provide significant functional benefits and improvements in overall health and well-being. These improvements include: increased bone density, improved muscle mass and joint function, reduced potential for injury, increased metabolism and improved cardiac function.</p>
                        <br />
                        <button className="btn btn-success">READ MORE</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;