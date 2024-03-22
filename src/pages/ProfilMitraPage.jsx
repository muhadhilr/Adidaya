import React from "react";
import FormProfil from "../fragments/ProfilMitraComponent/FormProfil";
import FinanceStatement from "../fragments/ProfilMitraComponent/FinanceStatement";
import FinanceRecap from "../fragments/ProfilMitraComponent/FinanceRecap";
import BackgroundImage from "../assets/images/background/bgProfilMitra.png";
import withNavbar from "../hoc/withNavbar";

const ProfilMitraPage = () => {
  return (
    <div
      className="mt-10"
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
      <div className="py-20" id="keuangan">
        <FinanceStatement />
      </div>
      <FinanceRecap />
    </div>
  );
};

export default withNavbar(ProfilMitraPage);
