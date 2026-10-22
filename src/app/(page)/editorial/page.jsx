import { Suspense } from "react";
import EditorialReviewClient from "@/components/editorial/EditorialReviewClient";
import { editorialModeEnabled } from "@/lib/editorial";

export const metadata = {
  title: "Editorial Review",
  description:
    "Local editorial review flow for draft insights, approval checks, and publish readiness.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EditorialPage() {
  if (!editorialModeEnabled) {
    return (
      <div className="min-h-[70vh] bg-[#f4f2ec] px-5 py-20 text-[#0b1f1e] min-[500px]:px-10 md:px-20">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-[0_30px_100px_-60px_rgba(15,23,42,0.45)]">
          <p className="text-sm font-karla font-semibold uppercase tracking-[0.18em] text-[#0b5d57]">
            Editorial review
          </p>
          <h1 className="mt-4 text-4xl font-karla font-semibold text-slate-900">
            Draft review is available on localhost only
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-lora text-lg leading-8 text-slate-600">
            This website is exported as a static production build, so unpublished
            insights are intentionally hidden from the live deployment. Run the
            site locally to review drafts and approve them for publication.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={null}>
      <EditorialReviewClient />
    </Suspense>
  );
}
