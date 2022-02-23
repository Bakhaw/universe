function SkillCard({ skill }) {
  return (
    <div className="flex flex-col justify-around items-center h-36 lg:h-44 w-32 lg:w-40 py-5 rounded-xl bg-white-transparent shadow-xl backdrop-blur-2xl">
      <img alt={skill.description} className="h-16 w-16" src={skill.icon} />
      <span className="text-2xl">{skill.description}</span>
    </div>
  );
}

export default SkillCard;
