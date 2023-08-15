// Import SASS

import "./course.scss"

// Import Images 

import CourseBanner from "../../assets/png/course-banner.png"

function Course() {

    return (
        <section className="course-section">
            <div className="conatiner">
                <div className="course-start-title">
                    <h2 className="course-start-title-h2">Bepul Online kurslar</h2>
                </div>

                <div className="course-start-buttons">
                    <button className="course-start-button">All programme</button>
                    <button className="course-start-button">Ui/ux design</button>
                    <button className="course-start-button">Program design</button>
                    <button className="course-start-button">Program  Design</button>
                    <button className="course-start-button">Program  Design</button>
                    <button className="course-start-button">Program  Design</button>
                </div>

                <div className="course-card-wrapper">

                    <div className="course-card">

                        <div className="course-card-top">
                            <img className="course-card-top-img" src={CourseBanner} alt="Network Error" />
                        </div>

                        <div className="course-card-middle">

                            <div className="course-card-date-info">
                                <p className="course-card-date-info-p">1 - 28 July 2022</p>
                            </div>

                            <div className="course-card-name">
                                <h4 className="course-card-name-h4">Product Management Basic - Course</h4>
                            </div>

                            <div className="course-card-description">
                                <p className="course-card-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                            </div>

                        </div>

                        <div className="course-card-bottom">

                            <div className="course-card-bottom-wrapper">

                                <div className="course-card-bottom-free">
                                    <h5 className="course-card-bottom-free-h5">Free</h5>
                                </div>

                                <div className="course-card-bottom-price">
                                    <h5 className="course-card-bottom-price">$ 500</h5>
                                </div>

                            </div>

                            <button className="course-card-bottom-btn">Enroll Now</button>
                        </div>
                    </div>

                    <div className="course-card">

                        <div className="course-card-top">
                            <img className="course-card-top-img" src={CourseBanner} alt="Network Error" />
                        </div>

                        <div className="course-card-middle">

                            <div className="course-card-date-info">
                                <p className="course-card-date-info-p">1 - 28 July 2022</p>
                            </div>

                            <div className="course-card-name">
                                <h4 className="course-card-name-h4">Product Management Basic - Course</h4>
                            </div>

                            <div className="course-card-description">
                                <p className="course-card-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                            </div>

                        </div>

                        <div className="course-card-bottom">

                            <div className="course-card-bottom-wrapper">

                                <div className="course-card-bottom-free">
                                    <h5 className="course-card-bottom-free-h5">Free</h5>
                                </div>

                                <div className="course-card-bottom-price">
                                    <h5 className="course-card-bottom-price">$ 500</h5>
                                </div>

                            </div>

                            <button className="course-card-bottom-btn">Enroll Now</button>
                        </div>
                    </div>

                    <div className="course-card">

                        <div className="course-card-top">
                            <img className="course-card-top-img" src={CourseBanner} alt="Network Error" />
                        </div>

                        <div className="course-card-middle">

                            <div className="course-card-date-info">
                                <p className="course-card-date-info-p">1 - 28 July 2022</p>
                            </div>

                            <div className="course-card-name">
                                <h4 className="course-card-name-h4">Product Management Basic - Course</h4>
                            </div>

                            <div className="course-card-description">
                                <p className="course-card-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                            </div>

                        </div>

                        <div className="course-card-bottom">

                            <div className="course-card-bottom-wrapper">

                                <div className="course-card-bottom-free">
                                    <h5 className="course-card-bottom-free-h5">Free</h5>
                                </div>

                                <div className="course-card-bottom-price">
                                    <h5 className="course-card-bottom-price">$ 500</h5>
                                </div>

                            </div>

                            <button className="course-card-bottom-btn">Enroll Now</button>
                        </div>
                    </div>

                    <div className="course-card">

                        <div className="course-card-top">
                            <img className="course-card-top-img" src={CourseBanner} alt="Network Error" />
                        </div>

                        <div className="course-card-middle">

                            <div className="course-card-date-info">
                                <p className="course-card-date-info-p">1 - 28 July 2022</p>
                            </div>

                            <div className="course-card-name">
                                <h4 className="course-card-name-h4">Product Management Basic - Course</h4>
                            </div>

                            <div className="course-card-description">
                                <p className="course-card-description-p">Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</p>
                            </div>

                        </div>

                        <div className="course-card-bottom">

                            <div className="course-card-bottom-wrapper">

                                <div className="course-card-bottom-free">
                                    <h5 className="course-card-bottom-free-h5">Free</h5>
                                </div>

                                <div className="course-card-bottom-price">
                                    <h5 className="course-card-bottom-price">$ 500</h5>
                                </div>

                            </div>

                            <button className="course-card-bottom-btn">Enroll Now</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Course