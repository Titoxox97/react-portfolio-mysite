import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Possess</h5>
            <h2>My Experience</h2>

            <div className='container experience_container'>
                <div className='experience_frontend'>
                    <h3>Technical Skills</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Sales Force</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>JQuery</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Microsoft Excel</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>API's</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>SQL</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Microsoft Access</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>MongoDB</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Node</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>ExpressJs</h4>
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
                        </article>
                    </div>
                </div>

                {/* Beginning of Backend */}
                <div className='"experience_backend'>
                    <h3>Soft Skills</h3>
                    <div className='experience_content'>
                        
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Customer Service</h4>
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
                            <h4>Data Entry</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Research/Reporting</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Excel/Access</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Spanish</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Communication</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Public Speaking</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Adult Education</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Project Management</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Time Management</h4>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <h4>Business Process Improvement</h4>
                        </article>

                    </div>
                </div>

            </div>
        </section >
    )
}

export default Experience