import { useTranslation } from "react-i18next";

import { socialsList } from "../../data";

import ContactIllustration from "../../assets/images/contact-illustration.svg";

import Divider from "../../components/Divider";
import Illustration from "../../components/Illustration";
import Section from "../../components/Section";

function Contact() {
  const { t } = useTranslation();

  return (
    <Section id="contact" title="contactTitle">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="flex justify-center items-center">
          <Illustration
            alt="Me waiting for your messages"
            src={ContactIllustration}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-6xl">{t("contactSubtitle")}</h1>
            <span className="text-2xl">
              <a href="mailto:faissal.hattou@gmail.com">
                faissal.hattou@gmail.com
              </a>
            </span>
            <span className="text-2xl">
              <a href="tel:+33634161866">(+33) 6 34 16 18 66</a>
            </span>
          </div>

          <Divider />

          <ul className="flex flex-col lg:flex-row justify-center items-center gap-6">
            {socialsList.map((social, i) => (
              <li key={i}>
                <a
                  className="flex justify-center items-center gap-2 py-2 px-3 border-2 rounded-xl"
                  href={social.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt={social.label} src={social.icon} />
                  <span className="text-xl">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
