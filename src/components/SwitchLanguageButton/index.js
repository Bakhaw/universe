import { useContext } from "react";

import UKFlag from "../../assets/icons/uk-flag.svg";
import FranceFlag from "../../assets/icons/france-flag.svg";

import { StateContext } from "../../context";

function SwitchLanguageButton() {
  const { currentLanguage, toggleLanguage } = useContext(StateContext);

  return (
    <button>
      <img
        alt="France flag"
        className="h-9 w-9"
        onClick={toggleLanguage}
        src={currentLanguage === "fr" ? FranceFlag : UKFlag}
      />
    </button>
  );
}

export default SwitchLanguageButton;
