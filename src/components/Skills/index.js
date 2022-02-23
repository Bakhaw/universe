import ExpressIcon from "../../assets/icons/express.svg";
import GitIcon from "../../assets/icons/git.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import JestIcon from "../../assets/icons/jest.svg";
import MongoIcon from "../../assets/icons/mongodb.svg";
import NodeIcon from "../../assets/icons/nodejs.svg";
import ReactIcon from "../../assets/icons/reactjs.svg";
import WebpackIcon from "../../assets/icons/webpack.svg";

import SkillCard from "../SkillCard";

const skillsList = [
  {
    description: "Javascript",
    icon: JavascriptIcon,
  },
  {
    description: "React JS",
    icon: ReactIcon,
  },
  {
    description: "Webpack",
    icon: WebpackIcon,
  },
  {
    description: "Jest",
    icon: JestIcon,
  },
  {
    description: "Node JS",
    icon: NodeIcon,
  },
  {
    description: "Express JS",
    icon: ExpressIcon,
  },
  {
    description: "Mongo DB",
    icon: MongoIcon,
  },
  {
    description: "Git",
    icon: GitIcon,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center gap-20"
    >
      <h1 className="text-5xl lg:text-6xl">Skills</h1>

      <ul className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-7">
        {skillsList.map((skill, i) => (
          <li key={i}>
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
