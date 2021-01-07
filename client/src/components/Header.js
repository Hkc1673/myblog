import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from "../images/avatar.png"
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar alt="myPhoto" src={avatar} className="avatar" />
                <div className="header__userName">
                    <h3>Habib KOÇ</h3>
                    <p>Fullstack Developer</p>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightButtons">
                    <Button color="primary">ANA SAYFA</Button>
                    <Button color="primary">BLOG</Button>
                    <Button color="primary">TEKNOLOJİ</Button>
                    <Button color="primary">YAZILIM</Button>
                    <Button color="primary">İLETİŞİM</Button>
                </div>

                <IconButton className="header__rightMenuIcon">
                    <MenuIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
