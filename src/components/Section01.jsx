import React from "react";
import BreadCard from "./BreadCard";
import breadImg1 from "../assets/images/bread01.jpg";
import breadImg2 from "../assets/images/bread02.jpg";
import breadImg3 from "../assets/images/bread03.jpg";
import breadImg4 from "../assets/images/bread04.jpg";
import breadImg5 from "../assets/images/bread05.jpg";
import breadImg6 from "../assets/images/bread06.jpg";

const Section01 = () => {
  return (
    <section className="se-01">
      <div className="inner">
        <div className="column column1">
          <BreadCard
            name="Amaretto Classico"
            price="6,00 €"
            image={breadImg1}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno,
            confezionati singolarmente."
          />
          <BreadCard
            name="Mandorlotto Classico"
            price="6,00 €"
            image={breadImg4}
            exItemText="Busta da 200 gr. contenente 5 mandorlotti da 40 gr. ciscuno, confezionati singolarmente."
          />
        </div>
        <div className="column column2">
          <div className="textCard">
            <p>Prova i nostri</p>
            <p>AMARETTI E MANDORLOTTI</p>
          </div>
          <BreadCard
            name="Amaretto al Pistacchio"
            price="7,00 €"
            image={breadImg2}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
          <div className="textCard">
            <p>Mandorle 100% Italiane</p>
            <p>NATURA PURA IN OGNI MORSO</p>
          </div>
          <BreadCard
            name="Amaretto alla Liquirizia"
            price="6,00 €"
            image={breadImg5}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
        </div>
        <div className="column column3">
          <BreadCard
            name="Mandorlotto all'Amarena"
            price="7,00 €"
            image={breadImg3}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
          <BreadCard
            name="Amaretto all'Amarena"
            price="7,00 €"
            image={breadImg6}
            exItemText="Busta da 200 gr. contenente 10 amaretti da 20 gr. ciscuno, confezionati singolarmente."
          />
        </div>
      </div>
    </section>
  );
};

export default Section01;
