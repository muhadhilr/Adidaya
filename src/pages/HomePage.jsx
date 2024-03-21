import React from "react";
import Header from "../fragments/HomepageComponent/Header";
import About from "../fragments/HomepageComponent/About";
import Product from "../fragments/HomepageComponent/Product";
import StepInvestor from "../fragments/HomepageComponent/StepInvestor";
import StepPartner from "../fragments/HomepageComponent/StepPartner";
import Footer from "../fragments/HomepageComponent/Footer";
import withNavbar from "../hoc/withNavbar";
import BackgroundImage from "../assets/images/background/bgHomepage.png";
import FooterFoot from "../elements/Footer";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-[100vh] md:h-[110vh]">
        <Header />
      </div>
      <div id="about" className="md:h-[110vh] flex items-center">
        <About />
      </div>
      <div className="md:h-[110vh] md:pt-24">
        <Product />
      </div>
      <div className="md:h-[110vh] flex items-center">
        <StepInvestor />
      </div>
      <div className="md:h-[110vh] flex items-center">
        <StepPartner />
      </div>
      <div className="md:h-[110vh] flex items-center">
        <Footer />
      </div>
        <FooterFoot />
    </div>
  );
};

export default withNavbar(HomePage);
