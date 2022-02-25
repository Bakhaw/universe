import ActiveSlide from "./ActiveSlide";
import NextSlide from "./NextSlide";
import PreviousSlide from "./PreviousSlide";

function CarouselContent({
  activeSlide,
  goToNextSlide,
  goToPreviousSlide,
  nextSlide,
  prevSlide,
}) {
  return (
    <ul className="grid grid-cols-work justify-center items-end h-full overflow-hidden">
      <PreviousSlide slide={prevSlide} />

      <ActiveSlide
        goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
        slide={activeSlide}
      />

      <NextSlide slide={nextSlide} />
    </ul>
  );
}

export default CarouselContent;
