import React from 'react'
import './about.css'
import ME from '../../assets/biopic_3.jpeg'
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
                        <img src={ME} alt='Matias Ahrensdorf' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Data engineering, quantitative research, financial analysis</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Published</h5>
                            <small>11 articles and reports in the WSJ, City Journal, RealClear</small>
                        </article>

                        <article className='about__card'>
                            <VscFolder className='about__icon' />
                            <h5>Stack</h5>
                            <small>Python, SQL, Snowflake, Tableau, React, MCP</small>
                        </article>
                    </div>

                    <p>
                        I'm a data and software engineer at the Manhattan Institute. Half my job
                        consists of building and maintaining data infrastructure, including Snowflake
                        models, reverse-ETL jobs, CRM and Tableau reporting, and LLM integrations built
                        on MCP servers. I also run three of our websites, which means publishing
                        content, fixing bugs, and building out new pages and interactive tools.
                    </p>
                    <p>
                        The other half is research for our scholars and fellows, which means taking
                        messy federal and municipal data, cleaning it into something you can actually
                        run a model on, and then running it. When a scholar needs government data that
                        isn't published, I file the FOIL requests to get it.
                    </p>
                    <p>
                        I write in my spare time. I have eleven published articles and reports so far,
                        in the Wall Street Journal, City Journal, RealClear, Compact, and the Washington
                        Examiner, on Latin America, geopolitics, finance and economics.
                    </p>
                    <p>
                        Separately, I manage and maintain Compact Magazine's website as a contractor.
                    </p>
                    <p>
                        I majored in finance in college and worked as a financial analyst before this
                        role, directly under the CFO, where I built and analyzed reports covering
                        deferred revenue, COGS, commissions, budgets, and sales tax. I also worked on
                        several audits.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Message Me</a>
                </div>
            </div>
        </section>
    )
}

export default About
