import First from "./home/first";
import Second from "./home/second";
import Third from "./home/third";
import Form from "@/components/form";
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
      <Second translate={t} />
      <Third translate={t} locale={lang} />
      <Form />
    </main>
  );
}
