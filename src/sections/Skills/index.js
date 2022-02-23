import { skillsList } from "../../data";

import Section from "../../components/Section";
import SkillCard from "../../components/SkillCard";
import Title from "../../components/Title";

function Skills() {
  return (
    <Section id="skills">
      <Title>Skills</Title>

      <ul className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-7">
        {skillsList.map((skill, i) => (
          <li key={i}>
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Skills;
