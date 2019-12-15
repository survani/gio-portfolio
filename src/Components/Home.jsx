import React from 'react'

const Home = () => {
    return (
        <div className='home-bio-container'>
            <section className='home-introduction'>
                <h1>Hey there, I am Giovani Garfias.</h1>
                <h2>I love coding.</h2>
                <div className='home-social-icons'>
                    <img className='icon' alt='' src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/6478509201551953708-128.png'></img>
                    <img className='icon' alt='' src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13702699181561032680-128.png'></img>
                    <img className='icon' alt='' src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/16090541531530099327-128.png'></img>
                    <img className='icon' alt='' src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/21399810441555589926-128.png'></img>
                    {/*This will include all the icons that links into my social networks.*/}
                </div>
            </section>
        </div>
    )
}

export default Home;