import React from 'react'
import "./Description.css"
import react from "../images/react.gif"
import reactNative from "../images/reactNative.gif"
import logo_js from "../images/logo_js.png"
import logo_nodejs from "../images/logo_nodejs.png"

function Description() {
    return (
        <div className="description">
            <div className="description__header">
                <h2>Hangi Teknolojileri Kullanıyorum?</h2>
            </div>
            <div className="description__footer">
                <div>
                    <img src={logo_js} alt="js" />
                    <p>HTML - CSS - JS</p>
                </div>
                <div>
                    <img src={react} alt="react" />
                    <p>REACT JS</p>
                </div>
                <div>
                    <img src={reactNative} alt="reactNative" />
                    <p>REACT NATIVE</p>
                </div>
                <div>
                    <img src={logo_nodejs} alt="nodejs" />
                    <p>NODE JS</p>
                </div>
            </div>
        </div>
    )
}

export default Description
