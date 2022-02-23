import ContactIllustration from "../../assets/images/contact-illustration.svg";
import GithubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

import Divider from "../Divider";

const socialsList = [
  {
    icon: GithubIcon,
    label: "Github",
    link: "https://github.com/Bakhaw",
  },
  {
    icon: LinkedinIcon,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/faissal-hattou/",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    link: "https://twitter.com/Faissal_Hattou",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-20"
    >
      <h1 className="text-5xl lg:text-6xl">Contact</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="flex justify-center items-center">
          <img
            alt="Me waiting for your messages"
            className="w-96 lg:w-[560px]"
            src={ContactIllustration}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-6xl">Let's talk !</h1>
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
    </section>
  );
}

export default Contact;
