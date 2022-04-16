import React from 'react'
import './writing.css'
import Orwell from '../../assets/Essay_orw.pdf'
import Wulf from '../../assets/Essay_wulf.pdf'
import Frank from '../../assets/Essay_frank.pdf'
import Rebecca from '../../assets/Essay_rebecca.pdf'
import Snap from '../../assets/Essay_snap.pdf'
import Crypto from '../../assets/Essay_crypto.pdf'
import Trade from '../../assets/Essay_trade.pdf'
import Selfie from '../../assets/Essay_selfie.pdf'
import { FiCheck } from 'react-icons/fi'

const Services = () => {
    return (
        <section id='services'>
            <h5>(click titles to download) </h5>
            <h2>Writing Samples</h2>

            <div className="container services_container">
                <article className='service'>
                    <div className='service_head'>
                        <h3>Novel Essays</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Orwell} download>50 Shades of the Future</a>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Wulf} download>The Rise and Fall of Beowulf</a>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Frank} download>The Price of Knowledge</a>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Rebecca} download>The Loyal Maid and the Selfish Husband</a>
                        </li>
                    </ul>
                </article>
                {/* End of Novel Essays collumn */}

                <article className='service'>
                    <div className='service_head'>
                        <h3>Business Papers</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Snap} download>The Visual Evolution of Communication</a>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Crypto} download>Facebook's Cryptocurrency Roadblock</a>
                        </li>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Trade} download>The Effects of the US-China Trade War on the EU</a>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development collumn */}
                <article className='service'>
                    <div className='service_head'>
                        <h3>Spanish Essays</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <FiCheck className='service_list-icon' />
                            <a href={Selfie} download>Los Selfies: Una Forma de Arte</a>
                        </li>

                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services