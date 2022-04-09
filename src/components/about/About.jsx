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
                        <img src={ME} alt="about image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Finance, Data Management, Research, Programming</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Education</h5>
                            <small>Elon University</small>
                        </article>

                        <article className='about__card'>
                            <VscFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>

                    </div>

                    <p>
                        Hi, I'm Matias, an ambitious self starter with a passion for finance and software development. In my spare time I enjoy reading, writing, playing videogames, practicing my programming skills, rock climbing, and managing my investments. <br /> <br />
                        I went to Elon University where I earned my Bachelors of Science in Business Administration with a concentration in Finance and a minor in Spanish. During my time there I had the opportunity to study abroad in Japan, South Korea, and Barcelona, where I studied international economics and business culture. <br /> <br />
                        My dream job is to work in finance innovation, I have a firm belief that we have barely scraped the surface of opportunities in the finance technology space and the way everyday individuals manage their money. 

                    </p>

                    <a href='#contact' className='btn btn-primary'>Message Me</a>

                </div>
            </div>

        </section>
    )
}

export default About