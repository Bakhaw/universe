import CarouselContent from "./CarouselContent";

function Carousel({
  activeSlide,
  goToNextSlide,
  goToPreviousSlide,
  nextSlide,
  prevSlide,
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <CarouselContent
        activeSlide={activeSlide}
        goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  );
}

export default Carousel;
