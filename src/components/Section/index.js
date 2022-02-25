import Title from "../Title";

function Section({ children, id, title, useBioHeight }) {
  const conditionalHeight = useBioHeight
    ? "min-h-bio-mobile lg:min-h-bio"
    : "min-h-screen";

  return (
    <section
      className={`flex flex-col justify-center items-center gap-20 ${conditionalHeight}`}
      id={id}
    >
      <Title label={title} />

      <div className="flex justify-center items-center">{children}</div>
    </section>
  );
}

export default Section;
