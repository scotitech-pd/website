import Container from "@/components/ui/Container";
import ProductsSection from "@/components/home/ProductsSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products: Vamiq, AXOS and ClarityPath",
  description:
    "ScotiTech products: Vamiq for Apple device management and a private app store, AXOS for a self-hosted AI workspace, and ClarityPath for decisions.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="bg-surface-muted pb-4 pt-12 md:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="t-eyebrow reveal-now">Products</p>
            <h1 className="t-display reveal-now mt-4">Focused products that do one job well.</h1>
            <p className="t-lead reveal-now mt-6 max-w-2xl">
              Vamiq (formerly AppDeploy) leads: Apple device management and a branded app store for
              your own apps. AXOS is a private AI workspace that runs on your own servers, and
              ClarityPath brings structure to life&apos;s biggest decisions.
            </p>
          </div>
        </Container>
      </section>
      <ProductsSection showIntro={false} />
    </>
  );
}
