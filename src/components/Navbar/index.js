import { useState } from "react";

import MenuIcon from "../../assets/icons/menu.svg";

import Modal from "./Modal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      {!isMenuOpen && (
        <div className="pl-10 pt-10 lg:pl-20 lg:pt-20">
          <img
            alt="Menu"
            className="h-9 w-9 cursor-pointer"
            onClick={openMenu}
            src={MenuIcon}
          />
        </div>
      )}

      <Modal closeMenu={closeMenu} isOpen={isMenuOpen} />
    </>
  );
}

export default Navbar;
