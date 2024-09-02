import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";
import Fourth from "./components/fourth";
import { useTranslation } from "@/hooks/useTranslation";

export default function AU({ searchParams }) {
  const { locale } = searchParams;
  let lang = "en";
  if (typeof locale === "string") {
    lang = locale;
  }
  const { t } = useTranslation(lang);
  return (
    <main>
      <First translate={t} locale={lang} />
      <Second translate={t} />
      <Third translate={t} />
      <Fourth translate={t} />
    </main>
  );
}
