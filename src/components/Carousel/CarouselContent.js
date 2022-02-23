function CarouselContent({ activeSlide, nextSlide, prevSlide }) {
  return (
    <ul className="grid grid-cols-work justify-between items-center h-full overflow-hidden">
      <li className="translate-x-[-50%] h-3/4">
        <img
          alt={prevSlide.img.src}
          className="object-cover object-top h-full w-full"
          src={prevSlide.img.src}
        />
      </li>

      <li className="min-w-[350px]">
        <img
          alt={activeSlide.img.src}
          className="object-cover object-top max-w-full h-auto"
          src={activeSlide.img.src}
        />
      </li>

      <li className="translate-x-[50%] h-3/4">
        <img
          alt={nextSlide.img.src}
          className="object-cover object-top h-full w-full"
          src={nextSlide.img.src}
        />
      </li>
    </ul>
  );
}

export default CarouselContent;
