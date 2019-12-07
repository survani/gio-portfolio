import React from 'react'

const Home = () => {
    return (
        <div className='home-bio-container'>
            <div className='bio-desc-container'>
                <div className='bio-img'>
                    <img src='https://avatars0.githubusercontent.com/u/46204471?s=460&v=4' />
                </div>
                <div className='bio-text'>
                    <div className='bio-title'>
                        <h1>Hello! I am Giovani a Full Stack Web Developer</h1>
                    </div>
                    <div className='bio-links'>
                        <a href='https://github.com/survani'>GitHub</a>
                        <a href='https://twitter.com/garfias_giovani'>Twitter</a>
                        <a href='https://dev.to/garfias_giovani'>Dev</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;