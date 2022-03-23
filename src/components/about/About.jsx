import React from 'react'
import './about.css'
import ME from '../../assets/Headshot.jpg'
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
                        <img src={ME} alt="about image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Year Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>50+</small>
                        </article>

                        <article className='about__card'>
                            <VscFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>

                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sequi amet, voluptates explicabo eius nihil debitis quibusdam eum fugiat veritatis? Eaque dolores maiores dicta, sunt rerum veritatis odio. Placeat, dolorum!
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>

        </section>
    )
}

export default About