import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download='Matias-Ahrensdorf-Resume.pdf' className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Get In Touch</a>
        </div>
    )
}

export default CTA
