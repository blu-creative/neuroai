import First from "./components/first";
import Second from "./components/second";

import { useTranslation } from "@/hooks/useTranslation";

export default function WWB({ searchParams }) {
  const { locale } = searchParams;
  let lang = "en";
  if (typeof locale === "string") {
    lang = locale;
  }

  const { t } = useTranslation(lang);

  return (
    <main className="text-neutral-100">
      <First locale={lang} translate={t} />
      <Second translate={t} />
    </main>
  );
}
