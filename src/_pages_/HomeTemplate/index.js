import React, { Component, useRef, useState } from 'react';

// Import Components
import Countdown from '../../_components_/Countdown';
import Sidebar from '../../_components_/Sidebar';
import RegistrationForm from '../../_components_/RegistrationForm';
import Schedule from '../../_components_/Schedule';
import ScoreBoard from '../../_components_/ScoreBoard';
import Footer from '../../_components_/Footer';

// Import Image
import schedule from '../../_pictures_/schedule.jpg';
import schedule_2 from '../../_pictures_/schedule_2.jpg';
import agenda from '../../_pictures_/agenda.jpg';
import liberty_hotel from '../../_pictures_/liberty_hotel.jpg';
import hoa_sen_uni from '../../_pictures_/hoa_sen_uni.jpg';
import bag from '../../_pictures_/bag.jpg';
import kote from '../../_pictures_/kote.jpg';
import shinai from '../../_pictures_/shinai.jpg';
import welcome from '../../_pictures_/welcome.jpg';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';

// Import Pages
import '../HomeTemplate/index.css';

function SwiperAuto() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
}

export default class HomeTemplate extends Component {
    render() {
        return (
            <div className="home-template">
                {/* Sidebar */}
                <div className='sidebar'>
                    <Sidebar />
                </div>

                {/* Carousel Slide */}
                <div className="carousel-slide">
                    <div className="slide-container">
                        <Swiper className='swiper-container'
                            // direction={"vertical"}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            spaceBetween={30}
                            loop={true}
                        >
                            <SwiperSlide><img className="slider-img" src={welcome} alt=""></img></SwiperSlide>
                            <SwiperSlide><img className="slider-img" src={kote} alt=""></img></SwiperSlide>
                            <SwiperSlide><img className="slider-img" src={bag} alt=""></img></SwiperSlide>
                            <SwiperSlide><img className="slider-img" src={shinai} alt=""></img></SwiperSlide>
                            <SwiperSlide><img className="slider-img" src={liberty_hotel} alt=""></img></SwiperSlide>
                            <SwiperSlide><img className="slider-img" src={hoa_sen_uni} alt=""></img></SwiperSlide>
                            <SwiperSlide><img className="slider-img" src={agenda} alt=""></img></SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Countdown  */}
                {/* <div className="countdown">
                    <Countdown
                        timeTillDate="02 22 2023, 4:00 pm" 
                        timeFormat="MM DD YYYY, h:mm a" />
                </div> */}

                {/* Introduction */}
                <div className="introduction">
                    <div className='introduction-container'>
                        <h3 className="intro-title">Introduction</h3>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci nulla repellat obcaecati blanditiis veniam sint eligendi, et commodi deleniti tempore nam sequi officiis cupiditate repudiandae quae tempora aspernatur nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, delectus deserunt! Suscipit iure, accusantium nostrum quod provident vero dolores! Laudantium odio vitae veniam minima? Quas harum velit quasi dolor facilis?
                            Illo harum nemo laboriosam totam natus quia accusantium? Eligendi voluptate tempora tempore distinctio ratione accusamus laborum culpa placeat porro, veritatis aliquam sed numquam nesciunt, ullam maxime mollitia quia accusantium harum.
                            Ut, repudiandae suscipit accusantium voluptates fugiat totam ab placeat rerum magnam nemo odio earum ad nostrum nulla, error dolores. Quibusdam, consectetur qui! Necessitatibus esse minima mollitia, voluptatibus saepe perspiciatis sed?
                            Id architecto perferendis, blanditiis distinctio doloremque delectus, at minima natus maxime vitae voluptates obcaecati quis dolorum officiis ipsa similique veritatis officia fugit iure. Quae nesciunt eum fuga. Dicta, nostrum quos?
                            Dignissimos sequi aut nam eius, deserunt dolor magnam maxime illo perspiciatis? Minus, dolorem mollitia alias veritatis, ea placeat cum, vel natus atque fugit id quos maiores pariatur impedit nulla rem.</div>
                    </div>
                </div>

                {/* Registration Form  */}
                {/* <RegistrationForm /> */}

                {/* Schedule */}
                <div className='schedule'>
                    <div className='schedule-container'>
                        <img className="schedule-img" src={schedule} alt="Schedule"></img>
                    </div>

                    <div className='schedule-container'>
                        <img className="schedule-img mx-auto" src={liberty_hotel} alt="liberty_hotel"></img>
                    </div>

                    <div className='schedule-container'>
                        <img className="schedule-img" src={schedule_2} alt="Schedule 2"></img>
                    </div>
                </div>


                {/* Score Board */}
                {/* <ScoreBoard /> */}

                {/* Footer */}
                <Footer />
            </div>
        )
    }
}