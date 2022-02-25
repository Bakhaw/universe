import { useTranslation } from "react-i18next";

function BackToTop() {
  const { t } = useTranslation();

  return (
    <div className="text-center py-20">
      <a href="#top">{t("backToTop")}</a>
    </div>
  );
}

export default BackToTop;
