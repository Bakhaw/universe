import { useTranslation } from "react-i18next";

function Title({ label }) {
  const { t } = useTranslation();

  return <h1 className="text-5xl lg:text-6xl">{t(label)}</h1>;
}

export default Title;
