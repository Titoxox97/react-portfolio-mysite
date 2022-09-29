import React from 'react'
import './about.css'
import ME from '../../assets/meChina.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolder } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="A handsome bastard" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Finance, Data Management, Research, Programming, Sales, Payroll</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Education</h5>
                            <small>Elon University</small><br />
                            <small>Major: Finance</small>
                        </article>

                        <article className='about__card'>
                            <VscFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>JS, React, HTML, CSS, Python, Pandas</small>
                        </article>

                    </div>

                    <p>
                    Senior payroll analyst leveraging a background in finance and sales, to create data driven solutions to minimize expenses and improve efficiency. Assisted managers with the implementation of new technologies to ease the transition to a paperless environment. <br></br> 
                    Additionally, I currently work as a teaching assistant for a full-stack web development program through the University of Carolina in Chapel Hill, where I assist students in developing knowledge and experience building web-pages and applications using HTML5, CSS, Bootstrap, JavaScript, JQuery as well as Python and MySQL.<br></br>
                    A passionate individual, capable of working well with others while strategizing solutions in a high stress environment, and able to balance multiple projects at once. Looking to bring my meticulous analytical skills and strategic mindset to a company, in order to grow and become a valuable asset.

                    </p>

                    <a href='#contact' className='btn btn-primary'>Message Me</a>

                </div>
            </div>

        </section>
    )
}

export default About