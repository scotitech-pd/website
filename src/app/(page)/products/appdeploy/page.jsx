import { redirect } from "next/navigation";

export default function LegacyAppDeployRedirectPage() {
  redirect("/products/vamiq");
}
