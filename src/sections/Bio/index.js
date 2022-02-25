import { useTranslation } from "react-i18next";

import { socialsList } from "../../data";

import Avatar from "../../components/Avatar";
import Divider from "../../components/Divider";
import Section from "../../components/Section";

function Bio() {
  const { t } = useTranslation();

  return (
    <Section id="bio" useBioHeight>
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-24 lg:flex-row">
        <Avatar />
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h1 className="text-5xl lg:text-8xl">Faïssal Hattou</h1>
            <h2 className="text-3xl lg:text-4xl">{t("bioFirstSubtitle")}</h2>
            <h2 className="text-3xl lg:text-4xl">{t("bioSecondSubtitle")}</h2>
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
    </Section>
  );
}

export default Bio;
