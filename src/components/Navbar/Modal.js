import CloseIcon from "../../assets/icons/close.svg";

function Navbar({ closeMenu, isOpen }) {
  function handleLinkClick() {}

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center h-screen p-10 lg:p-20 bg-very-dark-blue">
      <img
        alt="Close"
        className="h-9 w-9 cursor-pointer"
        onClick={closeMenu}
        src={CloseIcon}
      />

      <ul className="flex flex-col justify-center items-center self-center m-auto gap-24 text-light-grayish-blue text-4xl lg:text-7xl">
        <li>
          <a href="#about" onClick={closeMenu}>
            about
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            skills
          </a>
        </li>
        <li>
          <a href="#work" onClick={closeMenu}>
            work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
