function CarouselFooter({ activeSlide }) {
  const githubRepoLink = activeSlide.links[0];
  const liveDemoLink = activeSlide.links[1];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 w-full">
      <div className="flex justify-between items-center shrink-0 gap-3">
        <a
          className="bg-very-dark-blue text-light-grayish-cyan py-2 px-3 rounded-xl text-xl"
          href={`https://${liveDemoLink}.netlify.app`}
          rel="noreferrer"
          target="_blank"
        >
          live demo
        </a>
        <a
          className="bg-very-dark-blue text-light-grayish-cyan py-2 px-3 rounded-xl text-xl"
          href={`https://github.com/Bakhaw/${githubRepoLink}`}
          rel="noreferrer"
          target="_blank"
        >
          github repo
        </a>
      </div>

      <ul className="flex justify-center lg:justify-end items-center flex-wrap gap-1">
        {activeSlide.tags.map((tag, i) => (
          <div
            key={i}
            className="border-2 border-very-dark-blue text-very-dark-blue py-2 px-3 rounded-xl text-xl text-center shrink-0"
          >
            {tag}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CarouselFooter;
