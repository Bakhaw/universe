import ArrowDownIcon from "../../assets/icons/arrow-down.svg";

function ArchButton() {
  return (
    <div className="border-4 border-b-0 border-very-dark-blue rounded-t-full bg-very-dark-blue-transparent">
      <a href="#about">
        <img alt="Arrow down" className="px-6 py-3" src={ArrowDownIcon} />
      </a>
    </div>
  );
}

export default ArchButton;
