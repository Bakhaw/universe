import Title from "../Title";

function Section({ children, id, title }) {
  return (
    <section
      className="flex flex-col justify-center items-center gap-20 min-h-screen"
      id={id}
    >
      <Title label={title} />

      <div className="flex justify-center items-center">{children}</div>
    </section>
  );
}

export default Section;
