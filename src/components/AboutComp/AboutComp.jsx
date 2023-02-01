import React from "react";
import "./AboutComp.scss";

//IMAGE
import aboutCastle from '../../assets/img/aboutCompCastle.png'
function AboutComp() {
  return (
    <section className="aboutComp__back">
      <div className="aboutComp__text container">
        <div className="aboutComp__text_child">
          <span>Kompaniya haqida</span>
          <p>
            "Soosum" kompaniyasi 2021-yildan boshlab uzoq sharq o’simligi
            bo’lgan “Jenshen”ning ildizidan tayyorlangan ichimlikni ishlab
            chiqarib, O’zbekiston bo’ylab yetkazib berishni yo’lga qo’ydi.
            Kompaniyamiz Koreyaning "Chejun" ITD hamda Qizil Jenshen sharbati
            MChJ korxonalari bilan hamkorlikda ishlaydi. "Sunmee" qizil jenshen
            ildizi Janubiy Koreyada yetishtirilib O’zbekistonda qadoqlanadi.
          </p>
        </div>
        <img src={aboutCastle} alt="" />
      </div>
    </section>
  );
}

export default AboutComp;
