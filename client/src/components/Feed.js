import React from 'react'
import "./Feed.css"
import myPhoto from "../images/myPhoto.jpeg"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__img">
                <img src={myPhoto} alt="" />
            </div>
            <div className="feed__text">
                <h2>HAKKIMDA</h2>
                <p>Merhaba, ben Habib KOÇ</p>
                <h3>HABİB KOÇ</h3>
                <p>Fullstack Developer</p>
            </div>

        </div>
    )
}

export default Feed

