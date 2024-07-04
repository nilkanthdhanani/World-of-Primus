import React from 'react'
import './home.scss';
import { box2Img1, box2Img2, deiner, hero, lastImg } from '../../assets/images/jpg';
import { down, erwatet1, erwatet2, imgBatch, imgBatch2, mail } from '../../assets/images/png';
import { arrowLeft, heart, index, jump, lamp, pencil, rightArrow, seturn, slat } from '../../assets/images/svg';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-grid1">
              <div className="hero-grid1-box1">
                <h1>MAKE DIREKTVERTRIEB GREAT AGAIN</h1>
                <div className="hero-grid1-box1-text">
                  <p>Bei uns erwarten dich vielfältige Karrieremöglichkeiten in einem wachsenden Markt. </p>
                  <span>Schreibe deine eigene Legende, wir helfen dir!</span>
                </div>
              </div>
              <div className="hero-grid1-box2">
                <div className="box2-image">
                  <img src={box2Img2} alt="box2Img2" />
                  <div className="box2-image-layer">
                    <h2>UNSER TEAM</h2>
                  </div>
                </div>
                <div className="box2-image">
                  <img src={box2Img1} alt="box2Img1" />
                  <div className="box2-image-layer">
                    <h2>#WORLDOFPRIMUS</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-grid2">
              <img src={hero} alt="hero" />
              <div className="hero-grid2-layer">
                <div className="hero-grid2-text1">
                  <h3>JETZT BEWERBEN</h3>
                </div>
                <div className="hero-grid2-text2">
                  <div className="hero-grid2-text2-button">
                    <button>ÜBER UNS
                      <div className="button-image"><img src={down} alt="down" /></div>
                    </button>
                    <button>KONTAKT
                      <div className="button-image"><img src={mail} alt="mail" /></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>TEAM PRIMUS IST <br /> SEIT 3 JAHREN DAS ERFOLGREICHSTE TEAM IM DIREKTVERTRIEB BEI VODAFONE</h2>
        <div className="team-div">
          <h3>MASTERCLASS PRIMUS</h3>
          <div className="team-div-button">
            <button>BEWERBEN</button>
            <button>UNSER TEAM</button>
            <button>SHOP</button>
            <button>ERFOLGE</button>
          </div>
        </div>
      </section>

      <section className="deiner">
        <div className="container2">
          <div className="deiner-grid">
            <div className="deiner-grid1">
              <img src={deiner} alt="deiner" />
              <div className="deiner-grid1-batch">
                <img src={imgBatch} alt="imgBatch" />
                <div className="deiner-grid1-text">
                  BEWERBEN <img src={arrowLeft} alt="arrowLeft" />
                </div>
              </div>
            </div>
            <div className="deiner-grid2">
              <h2>WORLD OF PRIMUS <br /> DER ORT <br /> DEINER VERÄNDERUNG </h2>
              <div className="deiner-grid2-div">
                <div className="deiner-grid2-div1">
                  <div className="deiner-grid2-div1-head">
                    <div className="planet-image">
                      <img src={seturn} alt="seturn" />
                    </div>
                    <h3>ÜBER UNS</h3>
                  </div>
                  <p>Wir sind ein dynamisches und innovatives Direktvertriebsteam im Telekommunikationsbereich, spezialisiert auf Door to Door Sales. Unser Ziel ist es, hochwertige Telekommunikationsprodukte direkt zu den Kunden zu bringen und ihnen maßgeschneiderte Lösungen anzubieten.</p>
                </div>
                <div className="deiner-grid2-div1">
                  <div className="deiner-grid2-div1-head">
                    <div className="planet-image">
                      <img src={seturn} alt="seturn" />
                    </div>
                    <h3>DEIN PROFIL</h3>
                  </div>
                  <p>Du bist motiviert, kommunikativ und hast Spaß am direkten Kundenkontakt? Dann bist du bei uns genau richtig! Vorerfahrungen im Vertrieb sind von Vorteil, aber nicht zwingend erforderlich.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="erwatet">
        <div className="container3">
          <div className="erwatet-div">
            <h2>DAS ERWATET DICH!</h2>
            <p>Wir legen großen Wert auf die Aus- und Weiterbildung unserer Teammitglieder. <br /> Durch umfangreiche Schulungsprogramme wirst du bestens auf deine Aufgaben vorbereitet.</p>
            <div className="erwatet-flex">
              <h3>JETZT</h3>
              <div className="erwatet-flex-div">
                <div className="erwatet-flex-div-img">
                  <img src={erwatet1} alt="erwatet1" />
                  <div className="erwatet-text">
                    <h4>Motivation</h4>
                    <h4>Schulung</h4>
                  </div>
                </div>
                <div className="erwatet-flex-div-img">
                  <img src={erwatet2} alt="erwatet2" />
                  <div className="erwatet-text">
                    <h4>Teamarbeit</h4>
                    <h4>Diziplin</h4>
                  </div>
                </div>
              </div>
              <h3>ERFOLG</h3>
            </div>
            <div className="erwatet-grid">
              <div className="erwatet-gridimg">
                <img src={jump} alt="jump" />
              </div>
              <div className="erwatet-grid-icon">
                <div className="erwatet-icon">
                  <img src={heart} alt="heart" />
                </div>
                <div className="right-arrow">
                  <img src={rightArrow} alt="rightArrow" />
                </div>
                <div className="erwatet-icon">
                  <img src={pencil} alt="pencil" />
                </div>
                <div className="right-arrow">
                  <img src={rightArrow} alt="rightArrow" />
                </div>
                <div className="erwatet-icon">
                  <img src={lamp} alt="lamp" />
                </div>
                <div className="right-arrow">
                  <img src={rightArrow} alt="rightArrow" />
                </div>
                <div className="erwatet-icon">
                  <img src={index} alt="index" />
                </div>
                <div className="right-arrow">
                  <img src={rightArrow} alt="rightArrow" />
                </div>
                <div className="erwatet-icon">
                  <img src={slat} alt="slat" />
                </div>
              </div>
              <div className="erwatet-grid-text-box">
                <div className="erwatet-grid-text">
                  <h5>INTERESSE</h5>
                  <p>Wir suchen motivierte und kommunikative Menschen, die Spaß am direkten Kundenkontakt haben und Herausforderungen lieben.</p>
                </div>
                <div className="erwatet-grid-text">
                  <h5>BEWERBUNG</h5>
                  <p>Du bist ehrgeizig und hast klare Ziele vor Augen.</p>
                </div>
                <div className="erwatet-grid-text">
                  <h5>FORTBILDUNG</h5>
                  <p>Wir fördern deine berufliche und persönliche Entwicklung durch regelmäßige Trainings und Coachings.</p>
                </div>
                <div className="erwatet-grid-text">
                  <h5>ARBEIT</h5>
                  <p>Bei uns arbeitest du mit modernsten Tools und Technologien, um deinen Arbeitsalltag effizient und erfolgreich zu gestalten.</p>
                </div>
                <div className="erwatet-grid-text">
                  <h5>ERFOLGE</h5>
                  <p>Bei uns wird Teamarbeit großgeschrieben. Wir unterstützen uns gegenseitig und feiern gemeinsam Erfolge.</p>
                </div>
              </div>
            </div>
            <div className="erwatet-grid-respo">
              <div className="erwatet-grid-text-box">
                <div className="erwatet-grid-text">
                  <div className="erwatet-icon">
                    <img src={heart} alt="heart" />
                  </div>
                  <h5>INTERESSE</h5>
                  <p>Wir suchen motivierte und kommunikative Menschen, die Spaß am direkten Kundenkontakt haben und Herausforderungen lieben.</p>
                </div>
                <div className="erwatet-grid-text">
                  <div className="erwatet-icon">
                    <img src={pencil} alt="pencil" />
                  </div>
                  <h5>BEWERBUNG</h5>
                  <p>Du bist ehrgeizig und hast klare Ziele vor Augen.</p>
                </div>
                <div className="erwatet-grid-text">
                  <div className="erwatet-icon">
                    <img src={lamp} alt="lamp" />
                  </div>
                  <h5>FORTBILDUNG</h5>
                  <p>Wir fördern deine berufliche und persönliche Entwicklung durch regelmäßige Trainings und Coachings.</p>
                </div>
                <div className="erwatet-grid-text">
                  <div className="erwatet-icon">
                    <img src={index} alt="index" />
                  </div>
                  <h5>ARBEIT</h5>
                  <p>Bei uns arbeitest du mit modernsten Tools und Technologien, um deinen Arbeitsalltag effizient und erfolgreich zu gestalten.</p>
                </div>
                <div className="erwatet-grid-text">
                  <div className="erwatet-icon">
                    <img src={slat} alt="heart" />
                  </div>
                  <h5>ERFOLGE</h5>
                  <p>Bei uns wird Teamarbeit großgeschrieben. Wir unterstützen uns gegenseitig und feiern gemeinsam Erfolge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="last-image">
        <div className="container">
          <div className="last-image-div">
            <div className="last-image-batch">
              <img src={imgBatch2} alt="imgBatch2" />
              <div className="last-image-text">
                BEWERBEN <img src={arrowLeft} alt="arrowLeft" />
              </div>
            </div>
            <div className="lastImg-div">
              <img src={lastImg} alt="lastImg" />
              <div className="lastImg-div-layer"></div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
