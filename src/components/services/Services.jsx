import React from 'react'
import './services.css'
import { FiCheck } from 'react-icons/fi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className='service'>
                    <div className='service_head'>
                        <h3>Writer</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Writer collumn */}

                <article className='service'>
                    <div className='service_head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development collumn */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Content Creator</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias beatae.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services