import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div className="text">
          <p>Sapori di Calabria</p>
          <p>
            PRODOTTI DA FORNO
            <br />
            ARTIGIANALI
          </p>
        </div>

        <div className="linkWrap">
          <div className="link">
            <p>Informazioni</p>
            <ul>
              <li>Informativa sulla privacy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="link">
            <p>Assistenza Clienti</p>
            <ul>
              <li>Condizioni Generali di Vendita</li>
              <li>Condizioni d'uso del Sito Web</li>
              <li>Servizio Clienti</li>
            </ul>
          </div>
          <div className="link">
            <p>Seguici su:</p>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="link">
            <p>Account</p>
            <ul>
              <li>Accedi</li>
            </ul>
          </div>
        </div>

        <div className="copy">
          <div class="circle" data-speed="-1.5">
            <svg
              class="textcircle"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 100a100 100 0 1 0 200 0a100 100 0 1 0 -200 0"
                id="path-circle"
                fill="none"
              ></path>
              <text>
                <textPath href="#path-circle" textLength="615">
                  Prodotti con Mandorle 100% Italiane -
                </textPath>
              </text>
            </svg>
          </div>

          <p className="copyTop">© 2024. Sapori e Natura di Calabria</p>
          <p className="copyBottom">
            C.da Archidero, 56 - 87012 Castrovillari &#40;CS&#41;. P. IVA
            02369870783
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
