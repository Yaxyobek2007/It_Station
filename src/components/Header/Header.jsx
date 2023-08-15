import "./Header.scss"

import header1 from "../../assets/svg/header-logo.svg" 

function Header(){
    return(
        <section className="section-header">
            <div className="container">
                <div className="header-box">
                  <ul className="header-link">
                    <li className="header-link-links1">
                        <img src={header1} alt="error" />
                    </li>
                    <li className="header-link-links2">
                        <div className="header-link-links2-pages">
                            <div className="header-link-links2-pages-item">Kurslar</div>
                            <div className="header-link-links2-pages-item">Blog</div>
                            <div className="header-link-links2-pages-item">Contact</div>
                        </div>
                        <button className="header-link-links2-sing-up-btn">Kirish</button>
                    </li>
                  </ul>
                </div>
            </div>
        </section>
    )
}

export default Header