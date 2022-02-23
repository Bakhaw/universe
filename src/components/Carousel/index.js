import CarouselContent from "./CarouselContent";
import CarouselHeader from "./CarouselHeader";

function Carousel({
  activeSlide,
  goToNextSlide,
  goToPreviousSlide,
  nextSlide,
  prevSlide,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <CarouselHeader
        activeSlide={activeSlide}
        goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
      />
      <CarouselContent
        activeSlide={activeSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
}

export default Carousel;
