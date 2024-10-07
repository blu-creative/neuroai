import First from "./components/first";

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
    </main>
  );
}
