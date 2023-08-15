// Import SASS

import "./experience.scss"

// Import Images

import ExperiencePython from "../../assets/png/experience-python.png"

// Import Swiper Component and Styles

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Experience() {

    return (
        <section className="experience-section">
            <div className="container">

                <div className="experience-start-title">
                    <h3 className="experience-start-h3">Bizning oquvchilar tajribasi</h3>
                </div>

                <div className="experience-wrapper">

                    <Swiper
                         slidesPerView={1}
                         spaceBetween={-150}
                         pagination={{
                           clickable: true,
                         }}
                        
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                    >

                        <SwiperSlide>
                            <div className="experience-card">

                                <div className="experience-card-right">
                                    <img className="experience-card-right-img" src={ExperiencePython} alt="Network Error" />

                                    <div className="experience-price">
                                        <h5 className="experience-price-h5">$ 380</h5>
                                        <h5 className="experience-price-line-h5">$ 500</h5>
                                    </div>
                                </div>

                                <div className="experience-card-left">

                                    <p className="experience-date-p">1 - 28 July 2022</p>
                                    <h3 className="experience-card-name-h3">Product Management Basic - Course</h3>
                                    <p className="experience-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

                                </div>

                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="experience-card">

                                <div className="experience-card-right">
                                    <img className="experience-card-right-img" src={ExperiencePython} alt="Network Error" />

                                    <div className="experience-price">
                                        <h5 className="experience-price-h5">$ 380</h5>
                                        <h5 className="experience-price-line-h5">$ 500</h5>
                                    </div>
                                </div>

                                <div className="experience-card-left">

                                    <p className="experience-date-p">1 - 28 July 2022</p>
                                    <h3 className="experience-card-name-h3">Product Management Basic - Course</h3>
                                    <p className="experience-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="experience-card">

                                <div className="experience-card-right">
                                    <img className="experience-card-right-img" src={ExperiencePython} alt="Network Error" />

                                    <div className="experience-price">
                                        <h5 className="experience-price-h5">$ 380</h5>
                                        <h5 className="experience-price-line-h5">$ 500</h5>
                                    </div>
                                </div>

                                <div className="experience-card-left">

                                    <p className="experience-date-p">1 - 28 July 2022</p>
                                    <h3 className="experience-card-name-h3">Product Management Basic - Course</h3>
                                    <p className="experience-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>

                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </section>
    )
}

export default Experience