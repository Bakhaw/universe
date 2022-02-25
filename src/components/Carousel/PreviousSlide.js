function PreviousSlide({ slide }) {
  return (
    <div className="translate-x-[-50%] h-3/4">
      <img
        alt={slide.img.src}
        className="object-cover object-top h-full w-full rounded-xl"
        src={slide.img.src}
      />
    </div>
  );
}

export default PreviousSlide;
