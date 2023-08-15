// Import SASS

import "./teachers.scss"

// Import Swiper Component and Styles

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Images 

import TeacherPng from "../../assets/img/teacher.png"
import LinkIn from "../../assets/svg/linkin-icon.svg"



function Teachers() {

    return (
        <section className="teachers-section">
            <div className="container">
                <div className="teachers-start">
                    <h3 className="teachers-start-h3">Tajribali ustozlarimiz</h3>
                </div>
                <div className="teachers-slider-wrapper">

                    <Swiper
                     slidesPerView={1}
                     spaceBetween={10}
                     pagination={{
                       clickable: true,
                     }}
                     breakpoints={{
                       '@0.00': {
                         slidesPerView: 1,
                         spaceBetween: 10,
                       },
                       '@0.75': {
                         slidesPerView: 2,
                         spaceBetween: 20,
                       },
                       '@1.00': {
                         slidesPerView: 3,
                         spaceBetween: 30,
                       },
                       '@1.50': {
                         slidesPerView: 4,
                         spaceBetween: 40,
                       },
                     }}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="SwiperSlide">
                            <div className="teacher-card">

                                <div className="teacher-card-top">
                                    <img className="teacher-card-top-img" src={TeacherPng} alt="Network Error" />
                                </div>

                                <div className="teacher-card-middle">
                                    <div className="teacher-card-name">
                                        <h3 className="teacher-card-name-h2">Jahongir Rahmonov</h3>
                                    </div>
                                    <div className="teacher-card-working">
                                        <h5 className="teacher-card-working-h5">Amazon Web Service (AWS)</h5>
                                    </div>
                                    <div className="teacher-card-experience">
                                        <p className="teacher-card-experience-p">7 yillik tajribaga ega Software Engineer.</p>
                                    </div>
                                </div>

                                <div className="teacher-card-bottom">
                                    <div className="teacher-card-icon">
                                        <img src={LinkIn} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Teachers