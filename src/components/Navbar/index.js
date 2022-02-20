import { useState } from "react";

import CloseIcon from "../../assets/icons/close.svg";
import MenuIcon from "../../assets/icons/menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function openMenu() {
    setIsOpen(true);
  }

  return (
    <div>
      {isOpen ? (
        <img alt="Close" onClick={closeMenu} src={CloseIcon} />
      ) : (
        <img alt="Menu" onClick={openMenu} src={MenuIcon} />
      )}
    </div>
  );
}

export default Navbar;
