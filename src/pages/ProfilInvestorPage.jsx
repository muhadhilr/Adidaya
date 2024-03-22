import React from "react";
import FinanceRecap from "../fragments/ProfilInvestorComponent/FinanceRecap";
import FormProfil from "../fragments/ProfilInvestorComponent/FormProfil";
import BackgroundImage from "../assets/images/background/bgProfilInvestor.png";

const ProfilInvestorPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div id="profil">
        <FormProfil />
      </div>
      <div id="keuangan">
        <FinanceRecap />
      </div>
    </div>
  );
};

export default ProfilInvestorPage;
