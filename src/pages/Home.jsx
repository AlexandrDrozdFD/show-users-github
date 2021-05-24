import React from 'react';
import searchImg from "../search-img.svg";


const Home = () => {
    return (
        <div className='home-page'>
            <div className="home-page__icon">
                <img src={searchImg} alt="home page icon"/>
            </div>
            <p className="home-page__text">Start with searching a GitHub user</p>
        </div>
    )
}

export default Home;