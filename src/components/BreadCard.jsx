import React from "react";
import breadImg1 from "../assets/images/bread01.jpg";
import breadImg2 from "../assets/images/bread02.jpg";
import breadImg3 from "../assets/images/bread03.jpg";
import breadImg4 from "../assets/images/bread04.jpg";
import breadImg5 from "../assets/images/bread05.jpg";
import breadImg6 from "../assets/images/bread06.jpg";

const BreadCard = ({ name, price, image, exItemText }) => {
  return (
    <div className="breadCard">
      <p className="name">{name}</p>
      <div className="explanation">
        <div class="exWrap">
          {[...Array(4)].map((_, index) => (
            <div className="exItem" key={index}>
              {exItemText}
            </div>
          ))}
        </div>
        <div class="exWrap">
          {[...Array(4)].map((_, index) => (
            <div className="exItem" key={index}>
              {exItemText}
            </div>
          ))}
        </div>
      </div>
      <div className="priceWrap">
        <div></div>
        <div className="price">{price}</div>
      </div>
      <div className="imgFrame">
        <div className="imgWrap">
          <img src={image} alt="bread1" />
        </div>
      </div>
    </div>
  );
};

export default BreadCard;
