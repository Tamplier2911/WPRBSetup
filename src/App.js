import "./App.scss";
import React from "react";

// components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

// pages
import HomePage from "./pages/HomePage/HomePage.jsx";

// js rendering css
import { AppContainer, AppMain } from "./AppStyles";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AppMain>
        <HomePage />
      </AppMain>
      <Footer />
    </AppContainer>
  );
};

export default App;
