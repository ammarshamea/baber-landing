import { Document, buildMetadata } from "@/src/lib/seo";

export { viewport } from "@/src/lib/seo";
export const metadata = buildMetadata("nl");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Document locale="nl">{children}</Document>;
}
