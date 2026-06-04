import { redirect } from "next/navigation";

export default function LegacyAxosRedirectPage() {
  redirect("/products/axos");
}
