import Container from "@/components/ui/Container";
import ProductsSection from "@/components/home/ProductsSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Vamiq device management and ClarityPath",
  description:
    "ScotiTech products: Vamiq, device management for small businesses' iPhones, iPads, Macs and Windows PCs with a branded app store, and ClarityPath.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="bg-surface-muted pb-4 pt-12 md:pt-20">
        <Container>
          <div className="max-w-3xl">
            <p className="t-eyebrow reveal-now">Products</p>
            <h1 className="t-display reveal-now mt-4">What we make.</h1>
            <p className="t-lead reveal-now mt-6 max-w-2xl">
              Vamiq (formerly AppDeploy) is our product: device management for small and growing
              businesses, with a branded app store for your own apps. ClarityPath, our decision-support
              app, is delivered through Vamiq.
            </p>
          </div>
        </Container>
      </section>
      <ProductsSection showIntro={false} />
    </>
  );
}
