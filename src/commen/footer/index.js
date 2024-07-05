import React from 'react'
import './footer.scss';
import { instagram2, linkedin2, logoWhite, telegram } from '../../assets/images/svg';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="containerF">
          <div className="footer-div">
            <div className="footer-div1">
              <h2>WORLD <br /> OF <br /> PRIMUS</h2>
              <p>MAKE DIREKTVERTRIEB GREAT AGAIN</p>
              <img src={logoWhite} alt="logoWhite" />
            </div>
            <div className="footer-div2-box">
              <div className="footer-div2">
                <h3>DAS TEAM</h3>
                <div className="footer-div2-span">
                  <span>Über uns</span>
                  <span>Neuer Wall 80</span>
                  <span>20354 Hamburg</span>
                </div>
              </div>
              <div className="footer-div2">
                <h3>KONTAKT</h3>
                <div className="footer-div2-icon">
                  <img src={linkedin2} alt="linkedin2" />
                  <img src={instagram2} alt="instagram2" />
                </div>
                <span>@worldofprimus</span>
                <span>info@worldofprimus.de</span>
              </div>
              <div className="footer-div2">
                <h3>JETZT BEWERBEN!</h3>
                <div className="footer-div2-button">
                  <button>BEWERBEN
                    <div className="button-image">
                      <img src={telegram} alt="telegram" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
