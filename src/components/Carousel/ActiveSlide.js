import CarouselFooter from "./CarouselFooter";
import CarouselHeader from "./CarouselHeader";

function ActiveSlide({ goToNextSlide, goToPreviousSlide, slide }) {
  const { links } = slide;

  const isPersonalProject = links.length > 1; // if it's not a personal project, i don't have it on Github and it isn't hosted on netlify
  const liveDemoLink = isPersonalProject
    ? `https://${links[1]}.netlify.app`
    : links[0];

  return (
    <div className="flex flex-col justify-between items-center gap-5 min-w-[350px]">
      <CarouselHeader
        activeSlide={slide}
        goToNextSlide={goToNextSlide}
        goToPreviousSlide={goToPreviousSlide}
      />

      <img
        alt={slide.img.src}
        className="object-cover object-top max-w-full h-auto rounded-xl"
        src={slide.img.src}
      />

      <CarouselFooter activeSlide={slide} />
    </div>
  );
}

export default ActiveSlide;
