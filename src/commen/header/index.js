import React from 'react'
import './header.scss';
import { instagram, linkdin, logo } from '../../assets/images/svg';
import { menu, sticker } from '../../assets/images/png';

export default function Header() {
  return (
    <>
      <header>
        <div className="header-batch">
          <p>DIREKTVERTRIEB - jetzt <span>bewerben</span> und <span>durchstarten</span></p>
          <div className="header-batch-sticker">
            <img src={sticker} alt="sticker" />
          </div>
          <div className="header-batch-text">
            <h2>JETZT BEWERBEN</h2>
          </div>
        </div>
        <div className="header-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="containerH">
          <div className="header-main">
            <div className="header-main1">
              <h3>WORLD OF PRIMUS</h3>
            </div>
            <div className="header-main2">
              <a href="/">LERNE UNS KENNEN</a>
              <a href="/">KONTAKT</a>
              <a href="/">SHOP</a>
            </div>
            <div className="header-main3">
              <img src={linkdin} alt="linkdin" />
              <img src={instagram} alt="instagram" />
              <h4>JETZT BEWERBEN</h4>
            </div>
            <div className="header-menu">
              <img src={menu} alt="menu" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
