import { useTranslation } from "react-i18next";

function BackToTop() {
  const { t } = useTranslation();

  function handleButtonClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="text-center py-20">
      <button onClick={handleButtonClick}>{t("backToTop")}</button>
    </div>
  );
}

export default BackToTop;
