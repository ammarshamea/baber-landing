import Landing from "@/components/Landing";
import { DICTS } from "@/src/lib/seo";
import type { Locale } from "@/src/i18n";

export default function Page({ params }: { params: { locale: Locale } }) {
  return <Landing locale={params.locale} dict={DICTS[params.locale]} />;
}
