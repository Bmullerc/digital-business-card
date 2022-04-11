import React from "react"
import Foto from ".//images/monke.png"

export default function Info() {
    return (
        <div className="info--container">
            <img className="info--image" src={Foto} alt="handsome me"></img>
            <header className="info--content">
                <h1 className="info--name">Bernardo Müller</h1>
                <h4 className="info--prof">Frontend Developer</h4>
                <h6 className="info--site"><a href="https://github.com/Bmullerc">github.com/Bmullerc</a></h6>
                <div className="btn--container">
                    <button className="btn--email btn"><a href="mailto:bernardo.muller.bm@gmail.com"><i class="fa-solid fa-envelope"></i>Email</a></button>
                    <button className="btn--linkedin btn"><a href="https://www.linkedin.com/in/bernardo-muller-086a64235/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></button>
                </div>
            </header>
        </div>
    )
}