import Landing from "@/components/Landing";
import { DICTS } from "@/src/lib/seo";

export default function Page() {
  return <Landing locale="nl" dict={DICTS.nl} />;
}
