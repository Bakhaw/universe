import { socialsList } from "../../data";

import ArchButton from "../../components/ArchButton";
import Avatar from "../../components/Avatar";
import Divider from "../../components/Divider";

function Bio() {
  return (
    <section
      id="bio"
      className="flex flex-col justify-between h-bio-mobile lg:h-bio"
    >
      {/* Terrible practice to add extra item so my content is centered with space-between :clown: */}
      <div />
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-24 lg:flex-row">
        <Avatar />
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h1 className="text-5xl lg:text-8xl">Faïssal Hattou</h1>
            <h2 className="text-3xl lg:text-4xl">web developer</h2>
            <h2 className="text-3xl lg:text-4xl">all around the world</h2>
          </div>

          <Divider />

          <ul className="flex justify-center items-center gap-6">
            {socialsList.map((social, i) => (
              <li key={i}>
                <a href={social.link} rel="noreferrer" target="_blank">
                  <img
                    alt={social.label}
                    className="p-1 border-2 rounded-xl"
                    src={social.icon}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ArchButton />
      </div>
    </section>
  );
}

export default Bio;
