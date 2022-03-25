import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SS-BookEng.png'
import IMG2 from '../../assets/SS-BudgTrack.png'
import IMG3 from '../../assets/SS-CodeQuiz.png'
import IMG4 from '../../assets/SS-DateApp.png'
import IMG5 from '../../assets/SS-NoteTake.png'
import IMG6 from '../../assets/SS-PwGen.png'
import IMG7 from '../../assets/SS-WorkSched.png'


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
                <article className='portfolio_item'>
                    <div className='portfolio_item-image'>
                        <img src={IMG7} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className='btn'>Github</a>
                    <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                </article>
            </div>
        </section>
    )
}

export default Portfolio