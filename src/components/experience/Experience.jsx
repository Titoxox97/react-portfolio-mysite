import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>My Experience</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Technical Skills</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                                <h4>JQuery</h4>
                                <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                                <h4>React</h4>\
                                <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Excel</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>API's</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>SQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>MongoDB</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>NodeJS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>ExpressJs</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Python</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Pandas</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Linux/Unix</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>

                {/* Beginning of Backend */}
                <div className='"experience_backend'>
                    <h3>Soft Skills</h3>
                    <div className='experience_content'>
                        
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Finance</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Sales</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Leadership</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Data Analysis</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Research</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Excel</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Spanish</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Communication</h4>
                        </article>

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Experience