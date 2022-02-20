import CloseIcon from "../../assets/icons/close.svg";

function Navbar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center h-screen p-10 sm:p-20 bg-very-dark-blue">
      <img
        alt="Close"
        className="h-9 w-9 cursor-pointer"
        onClick={onClose}
        src={CloseIcon}
      />

      <ul className="flex flex-col justify-center items-center self-center m-auto gap-24 text-light-grayish-blue text-4xl sm:text-7xl">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
