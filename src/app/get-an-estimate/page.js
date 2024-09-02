import First from "./components/first";
import Second from "./components/second";
import { useTranslation } from "@/hooks/useTranslation";

export default function GAE({ searchParams }) {
  const { locale } = searchParams;
  let lang = "en";
  if (typeof locale === "string") {
    lang = locale;
  }
  const { t } = useTranslation(lang);
  return (
    <main>
      <First translate={t} locale={lang} />
      <Second />
    </main>
  );
}
