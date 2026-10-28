import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FoundationLayout } from "@/components/foundation-layout";
import { HeroSlider } from "@/components/hero-slider";
import {
  AboutSection,
  CauseStrip,
  ServiceCards,
  ImpactSection,
  ActivityCards,
  BloodBanner,
  VisionSection,
} from "@/components/foundation-sections";
import { GalleryView } from "@/components/gallery-view";
import { GetInvolved } from "@/components/content-sections";
export function HomePage() {
  return (
    <FoundationLayout home>
      <HeroSlider />
      <CauseStrip />
      <AboutSection summary />
      <section className="section bg-muted">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2 className="section-title">
                Our focus areas. <span>One shared purpose.</span>
              </h2>
              <p className="section-copy mt-3">
                Our six core focus areas form a practical framework for identifying social needs,
                planning relevant initiatives and inviting community participation.
              </p>
            </div>
            <a href="/services" className="text-link mb-2">
              View all our initiatives
              <ArrowUpRight />
            </a>
          </div>
          <ServiceCards />
        </div>
      </section>
      <ImpactSection />
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">TOGETHER IN ACTION</div>
              <h2 className="section-title">
                Small moments. <span>Meaningful change.</span>
              </h2>
            </div>
            <a href="/events" className="text-link mb-2">
              Explore activities
              <ArrowUpRight />
            </a>
          </div>
          <ActivityCards />
        </div>
      </section>
      <BloodBanner />
      <VisionSection />
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A GLIMPSE OF OUR PURPOSE</div>
              <h2 className="section-title">
                Faces of hope. <span>Stories of possibility.</span>
              </h2>
            </div>
            <a href="/gallery" className="text-link mb-2">
              View gallery
              <ArrowUpRight />
            </a>
          </div>
          <GalleryView />
        </div>
      </section>
      <GetInvolved />
      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow">NEWS & UPDATES</div>
            <h2 className="section-title">From the foundation.</h2>
            <p className="section-copy my-4">
              Official announcements, confirmed event information, documented programme summaries
              and approved media coverage will be shared here when verified.
            </p>
            <a href="/press-releases" className="text-link">
              Visit the newsroom
              <ArrowRight />
            </a>
          </div>
          <div>
            <div className="eyebrow">COMMUNITY STORIES</div>
            <h2 className="section-title">Stories that use real experience.</h2>
            <p className="section-copy my-4">
              Community stories use real experiences, informed consent and respectful language. They
              are published only with proper authorisation.
            </p>
            <a href="/contact" className="text-link">
              Connect with us
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </FoundationLayout>
  );
}
