import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { SKILLS } from '../../data/site'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What I Work With</h5>
            <h2>Skills</h2>

            <div className='container experience_container'>
                {SKILLS.map(({ title, items }) => (
                    <div className='experience_group' key={title}>
                        <h3>{title}</h3>
                        <ul className='experience_content'>
                            {items.map((name) => (
                                <li className='experience_details' key={name}>
                                    <BsPatchCheckFill className='experience_details-icon' />
                                    <span>{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
