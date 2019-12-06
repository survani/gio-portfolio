import React from 'react'

const Home = () => {
    return (
        <div className='main-container'>
            <div className='home-bio-container'>
                <div className='bio-img'>
                    <img src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                </div>
                <div className='bio-title'>
                    <h1>Hello! I am Giovani a Full Stack Web Developer :)</h1>
                </div>
                <div className='bio-links'>
                    <a href='https://github.com/survani'>GitHub</a>
                    <a href='https://github.com/survani'>Twitter</a>
                    <a href='https://github.com/survani'>Dev</a>
                </div>
            </div>
        </div>
    )
}

export default Home;