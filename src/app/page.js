import First from "./home/first";
import Second from "./home/second";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home({ searchParams }) {
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
