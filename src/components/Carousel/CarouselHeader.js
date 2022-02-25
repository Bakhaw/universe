import ArrowLeftIcon from "../../assets/icons/arrow-left.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";

function CarouselHeader({ activeSlide, goToNextSlide, goToPreviousSlide }) {
  return (
    <div className="flex flex-col justify-between items-center gap-2 lg:gap-10 w-full">
      <div className="flex justify-between items-center gap-4 w-full">
        <img
          alt="Arrow to the left"
          className="cursor-pointer w-14 h-14"
          onClick={goToPreviousSlide}
          src={ArrowLeftIcon}
        />

        <h2 className="text-4xl lg:text-6xl">{activeSlide.title}</h2>

        <img
          alt="Arrow to the right"
          className="cursor-pointer w-14 h-14"
          onClick={goToNextSlide}
          src={ArrowRightIcon}
        />
      </div>

      <div className="flex justify-between items-center w-full">
        <span className="text-2xl lg:text-3xl">{activeSlide.date}</span>
        <span className="text-2xl lg:text-3xl">{activeSlide.description}</span>
      </div>
    </div>
  );
}

export default CarouselHeader;
