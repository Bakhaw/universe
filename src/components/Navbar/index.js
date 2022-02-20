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
        <div className="pl-10 pt-10 sm:pl-20 sm:pt-20">
          <img
            alt="Menu"
            className="h-9 w-9 cursor-pointer"
            onClick={openMenu}
            src={MenuIcon}
          />
        </div>
      )}

      <Modal isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default Navbar;
