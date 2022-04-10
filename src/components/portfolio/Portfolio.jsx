import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SS-BookEng.png'
import IMG2 from '../../assets/SS-BudgTrack.png'
import IMG3 from '../../assets/SS-CodeQuiz.png'
import IMG4 from '../../assets/SS-DateApp.png'
import IMG5 from '../../assets/SS-NoteTake.png'
import IMG6 from '../../assets/SS-PwGen.png'
import IMG7 from '../../assets/SS-WorkSched.png'


const data = [

    {
        id: 1,
        image: IMG1,
        title: 'Book Search Engine',
        github: 'https://github.com/Titoxox97/21-BookSearch-Engine',
        demo: ''
    },
    {
        id: 2,
        image: IMG2,
        title: 'Budget Tracker Application',
        github: 'https://github.com/Titoxox97/19-PWA-Budget-Tracker',
        demo: ''
    },
    {
        id: 3,
        image: IMG3,
        title: 'Code Quiz',
        github: 'https://github.com/Titoxox97/CodeQuiz-CH-4',
        demo: ''
    },
    {
        id: 4,
        image: IMG4,
        title: 'Dating Application',
        github: 'https://github.com/Shagens/BLIND-DATE/tree/src',
        demo: ''
    },
    {
        id: 5,
        image: IMG5,
        title: 'Note Taker Application',
        github: 'https://github.com/Titoxox97/Note-taker',
        demo: ''
    },
    {
        id: 6,
        image: IMG6,
        title: 'Password Generator',
        github: 'https://github.com/Titoxox97/Challenge-3-HW',
        demo: ''
    },
    {
        id: 7,
        image: IMG7,
        title: 'Work Scheduler',
        github: 'https://github.com/Titoxox97/Challenge5-WorkdayPlanner',
        demo: ''
    },
]



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Dev Portfolio</h2>

            <div className='container portfolio_container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className='portfolio_item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio