import { softSkillsList } from "../../data/softSkillsList";

import AboutIllustration from "../../assets/images/about-illustration.svg";

import Chip from "../../components/Chip";
import Illustration from "../../components/Illustration";
import Section from "../../components/Section";
import Title from "../../components/Title";

function About() {
  return (
    <Section id="about">
      <Title>About</Title>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-20 text-center">
        <div className="flex flex-col justify-center items-center gap-10 max-w-xl">
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
          <ul className="flex flex-wrap justify-center items-center gap-3 w-full lg:w-3/4">
            {softSkillsList.map((chip, i) => (
              <li key={i}>
                <Chip label={chip} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <Illustration alt="Me during work" src={AboutIllustration} />
        </div>
      </div>
    </Section>
  );
}

export default About;
