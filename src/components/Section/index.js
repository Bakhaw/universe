function Section({ children, id }) {
  return (
    <section
      className="flex flex-col justify-center items-center gap-20"
      id={id}
    >
      {children}
    </section>
  );
}

export default Section;
