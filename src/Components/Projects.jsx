import React from 'react';
import PrisonerSkillsImage from './Assets/PrisonerSkillsProject.png'

const Projects = () => {
    return (
        <div className='projects-container'>
            <section className='projects-page-title'>
                <h2>Projects</h2>
            </section>
            <section className='projects-body'>
                <div className='card'>
                    <div className='card-image'>
                        <img alt='Project' src={PrisonerSkillsImage}></img>
                    </div>
                    <div className='card-text-container'>
                        <div className='card-text'>
                            <p className='inner-title'>Prisoner Skills</p>
                            <a href='https://elegant-aryabhata-cdd64e.netlify.com/' className='inner-link-text'>Check it Out</a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Projects;