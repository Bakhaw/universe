import AboutIllustration from "../../assets/images/about-illustration.png";

import Chip from "../Chip";

const chipList = [
  "professionnel curieux",
  "esprit d'équipe",
  "force de proposition",
  "et qui apporte toujours la rondelle de citron dans le Coca (la bonne humeur)",
];

function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-20"
    >
      <h1 className="text-5xl lg:text-6xl">About</h1>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-0 text-center">
        <div className="flex flex-col justify-center items-center flex-1 gap-10">
          <h2 className="text-4xl lg:text-5xl">« Focus on improve 🚀 »</h2>
          <p className="text-2xl lg:text-3xl">
            Grand passionné du code et du JavaScript, en relation sérieuse avec
            React depuis 4 ans sans que la flamme ne se soit jamais éteinte.
          </p>
          <p className="text-2xl lg:text-3xl">
            Parti un peu plus tard que les autres sur la ligne de départ, cela a
            forgé mon autonomie et m'a donné les clés pour apprendre seul,
            efficacement et rapidement.
          </p>
          <ul className="flex flex-wrap justify-center items-center gap-3 w-3/4">
            {chipList.map((chip, i) => (
              <li key={i}>
                <Chip label={chip} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <img alt="Me during work" className="w-96" src={AboutIllustration} />
        </div>
      </div>
    </section>
  );
}

export default About;
