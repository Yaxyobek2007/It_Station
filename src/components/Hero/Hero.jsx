import "./Hero.scss"
import { useState, useEffect, useRef , memo} from "react"

import hero1 from "../../assets/svg/header-links2-vector.svg"
import hero2 from "../../assets/svg/header-links2-vector2.svg"
import hero3 from "../../assets/svg/header-links2-react.svg"
import hero4 from "../../assets/svg/header-links2-python.svg"
import hero5 from "../../assets/svg/header-links2-js.svg"
import hero6 from "../../assets/svg/header-links2-html.svg"
import hero7 from "../../assets/svg/header-links2-figma.svg"
import hero8 from "../../assets/img/header-links2-teacher.png"
import hero9 from "../../assets/img/header-links1-img.png"

function Hero() {

    const elImg1 = useRef()
    const elImg2 = useRef()
    const elReact = useRef()
    const elHtml = useRef()
    const elFigma = useRef()
    const elJs = useRef()
    const elPython = useRef()

    function onImg() {
        setTimeout(()=>{
            elImg1.current.classList.add('.open-img')
            elImg1.current.style.width = "709px"
            elImg1.current.style.top = "29%"
            elImg1.current.style.right = "30px"
        })
            setTimeout(() => {
                elImg2.current.style.width = "562px"
                elImg2.current.style.height = "352px"
                elImg2.current.style.top = "39.70%"
                elImg2.current.style.right = "100px"
            }, 300)
           setTimeout(() => {
                elReact.current.style.top = "29%"
                elReact.current.style.right = "40%"
            }, 1000) 
           setTimeout(() => {
                elHtml.current.style.top = "33%"
                elHtml.current.style.right = "31%"
            }, 1000) 
           setTimeout(() => {
                elFigma.current.style.top = "36%"
                elFigma.current.style.right = "10%"
            }, 1000) 
           setTimeout(() => {
                elJs.current.style.top = "65%"
                elJs.current.style.right = "40%"
            }, 1000) 
           setTimeout(() => {
                elPython.current.style.top = "82%"
                elPython.current.style.right = "6%"
            }, 1000) 
    }
    useEffect(() => {
        onImg()
    },[])

    return (
        <section className="section-hero">
            <div className="container">
                <div className="hero-box">
                    <ul className="hero-link">
                        <li className="hero-link-links1">
                            <h2 className="hero-link-links1-title">Dasturlashga oid
                                kasblarni o’rgatamiz</h2>
                            <button className="hero-link-links1-start-btn">O’qishni boshlash</button>
                        </li>

                        <li className="hero-link-links2">
                            <div className="hero-link-links2-imges">
                                <img className="hero-link-links2-img3" src={hero3} alt="error" ref={elReact} />
                                <img className="hero-link-links2-html" src={hero6} alt="error" ref={elHtml} />
                                <img className="hero-link-links2-img1" src={hero2} alt="error" ref={elImg1} />
                                <img className="hero-link-links2-img2" src={hero1} alt="error" ref={elImg2} />
                                <img className="hero-link-links2-figma" src={hero7} alt="error" ref={elFigma} />
                                <img className="hero-link-links2-js" src={hero5} alt="error" ref={elJs} />
                                <img className="hero-link-links2-python" src={hero4} alt="error" ref={elPython} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero