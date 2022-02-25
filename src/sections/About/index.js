import { useTranslation } from "react-i18next";

import AboutIllustration from "../../assets/images/about-illustration.svg";

import Chip from "../../components/Chip";
import Illustration from "../../components/Illustration";
import Section from "../../components/Section";

function About() {
  const { t } = useTranslation();

  const softSkillsList = t("aboutSoftSkills", { returnObjects: true });

  return (
    <Section id="about" title="aboutTitle">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-20 text-center px-5">
        <div className="flex flex-col justify-center items-center gap-10 max-w-xl">
          <h2 className="text-4xl lg:text-5xl">« Focus on improve 🚀 »</h2>
          <p className="text-2xl lg:text-3xl">{t("aboutFirstParagraph")}</p>
          <p className="text-2xl lg:text-3xl">{t("aboutSecondParagraph")}</p>
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
