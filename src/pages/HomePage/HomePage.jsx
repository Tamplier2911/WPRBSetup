import "./HomePage.scss";
import React from "react";

// components
import Section from "../../components/Section/Section.jsx";
import ImageHolder from "../../components/ImageHolder/ImageHolder.jsx";

import reactImg from "../../assets/png/react.png";
import babelImg from "../../assets/png/babel.png";
import webpacktImg from "../../assets/png/webpack.png";

const HomePage = () => (
  <section className="section">
    <Section id={1}>
      <ImageHolder alt="reactive" src={reactImg} />
      <ImageHolder alt="babelous" src={babelImg} />
    </Section>
    <Section id={2}>
      <ImageHolder alt="webby" src={webpacktImg} />
    </Section>
  </section>
);

export default HomePage;
