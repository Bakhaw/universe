import { useTranslation } from "react-i18next";

import CloseIcon from "../../assets/icons/close.svg";

function Navbar({ closeMenu, isOpen }) {
  const { t } = useTranslation();

  const navbarItems = t("navbarItems", { returnObjects: true });

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
        {navbarItems.map((item, i) => (
          <li>
            <a href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
