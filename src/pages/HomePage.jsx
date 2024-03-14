import React from "react";
import Header from "../fragments/HomepageComponent/Header";
import About from "../fragments/HomepageComponent/About";
import Product from "../fragments/HomepageComponent/Product";
import StepInvestor from "../fragments/HomepageComponent/StepInvestor";
import StepPartner from "../fragments/HomepageComponent/StepPartner";
import Footer from "../fragments/HomepageComponent/Footer";

const HomePage = () => {

  return (
    <div>
      <Header />
      <About />
      <Product />
      <StepInvestor />
      <StepPartner />
      <Footer />
    </div>
  );
};

export default HomePage;
