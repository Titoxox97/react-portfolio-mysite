import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Ned Stark',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur iure earum explicabo minus, quae ut ratione! Id, odio eaque molestias, adipisci iste incidunt nesciunt temporibus fuga vero amet velit at!'
    },
    {
        avatar: AVTR2,
        name: 'John Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur iure earum explicabo minus, quae ut ratione! Id, odio eaque molestias, adipisci iste incidunt nesciunt temporibus fuga vero amet velit at!'
    },
    {
        avatar: AVTR3,
        name: 'Arya Stark',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur iure earum explicabo minus, quae ut ratione! Id, odio eaque molestias, adipisci iste incidunt nesciunt temporibus fuga vero amet velit at!'
    },
    {
        avatar: AVTR4,
        name: 'Theon GreyJoy',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur iure earum explicabo minus, quae ut ratione! Id, odio eaque molestias, adipisci iste incidunt nesciunt temporibus fuga vero amet velit at!'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

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