import React from "react";
import image from "../assets/images/section03.jpg";

const Section03 = () => {
  return (
    <section className="se-03">
      <div className="inner">
        <div className="content">
          <p className="name">Sapore naturale in ogni boccone</p>
          <div className="explanation">
            <div class="exWrap">
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
            </div>
            <div class="exWrap">
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
              <div className="exItem">
                Il benessere dei clienti è fonte di ispirazione per Sapori e
                Natura di Calabria
              </div>
            </div>
          </div>

          <div className="contentBottom">
            <div className="imgFrame">
              <div className="imgWrap">
                <img src={image} alt="se03img" />
              </div>
            </div>

            <div className="aniFrame">
              <p>
                SEMPLICEMENTE
                <span>SANO!</span>
              </p>
              <ul>
                <li>GLUTEN FREE</li>
                <li>COLESTEROLO FREE</li>
                <li>SENZA CONSERVANT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
