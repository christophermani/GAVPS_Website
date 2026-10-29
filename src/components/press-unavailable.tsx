import { FoundationLayout } from "@/components/foundation-layout";

export function PressUnavailable() {
  return (
    <FoundationLayout>
      <section className="section">
        <div className="wrap">
          <h1 className="section-title">Press release unavailable</h1>
          <p className="section-copy my-5">This article has not been published or verified.</p>
          <a href="/press-releases" className="text-link">
            Return to the newsroom
          </a>
        </div>
      </section>
    </FoundationLayout>
  );
}
