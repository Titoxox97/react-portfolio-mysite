import React from 'react'
import './interests.css'
import AVTR1 from '../../assets/meSpain.jpg'
import AVTR2 from '../../assets/meStonk.jpg'
import AVTR3 from '../../assets/meBook.jpg'
import AVTR4 from '../../assets/meShanghai.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Travel',
        review: 'I have had the wonderful experience of visiting over 18 countries throughout the course of my life. My parents loved to travel and as a child I enjoyed many experiences abroad. We would go to Bolivia once a year to visit my mothers family which resided there. My favorite place I have visited thus far was Japan where I had the amazing opportunity to climb Mt. Fuji. I plan to continue to travel to new places and discover new experiences whenever I have time off. '
    },
    {
        avatar: AVTR2,
        name: 'Crypto and Investment Management',
        review: 'Growing up I was never taught anything about personal finances so when I finally took a personal finance course in college I started researching. I began managing my own investments and researching the stock market and cryptocurrency technology, that was four years ago and I havent looked back. More recently Ive began studying and investing in NFTs and the potential of blockchain technology on the financial landscape in the future.'
    },
    {
        avatar: AVTR3,
        name: 'Writing',
        review: 'I have begun a freelance side hustle where I can write articles, essays, short stories, and research papers for compensation. As a kid books werw a big part of my life and Ive always enjoyed putting my own words and ideas on paper. Ive always written for fun or for school, so I have decided to turn my writing skills into a service. I also enjoy writing and practicing my coding skills by working on different projects and continually self learning.'
    },
    {
        avatar: AVTR4,
        name: 'Recent Books Read (2022)',
        review: '"Chaos" by Mark Manson, "Zero to One" by Peter Thiel , "Dune" by Frank Herbert, "Freakenomics" by Steven Levitt and Stephen Dubner, "Elon Musk" by Ashlee Vance, "The Savior Generals" by Victor Hansen'
                
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Hobbies and</h5>
            <h2>Interests</h2>

            <Swiper className='container testimonials_container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client_avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>
                                    {review}
                                </small>
                            </SwiperSlide >
                        )
                    })
                }


            </Swiper>
        </section>
    )
}

export default Testimonials