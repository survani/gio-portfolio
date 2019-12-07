import React from 'react'

const Home = () => {
    return (
        <div className='home-bio-container'>
            <div className='bio-desc-container'>
                <div className='bio-img'>
                    <img alt='Profile' src='https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                </div>
                <div className='bio-text'>
                    <div className='bio-title'>
                        <h1>Hello! I am Giovani a Full Stack Web Developer</h1>
                    </div>
                    <div className='bio-links'>
                        <a className='github-a' href='https://github.com/survani'>GitHub</a>
                        <a className='twitter-a' href='https://twitter.com/garfias_giovani'>Twitter</a>
                        <a className='dev-a' href='https://dev.to/garfias_giovani'>Dev</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;