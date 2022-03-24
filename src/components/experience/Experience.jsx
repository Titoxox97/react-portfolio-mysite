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
                    <h3>Frontend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>JQuery</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>

                {/* Beginning of Backend */}
                <div className='"experience_backend'>
                    <h3>Backend Development</h3>
                    <div className='experience_content'>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>Node</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>ExpressJs</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>API's</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>MySQL</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>MongoDB</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <h4>MVC</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Experience