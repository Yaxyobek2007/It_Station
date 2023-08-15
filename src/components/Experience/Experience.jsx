// Import SASS

import "./experience.scss"

// Import Images

import ExperiencePython from "../../assets/png/experience-python.png"


function Experience() {

    return (
        <section className="experience-section">
            <div className="container">

                <div className="experience-start-title">
                    <h3 className="experience-start-h3">Bizning oquvchilar tajribasi</h3>    
                </div>

                <div className="experience-wrapper">
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
                </div>
            </div>

        </section>
    )
}

export default Experience