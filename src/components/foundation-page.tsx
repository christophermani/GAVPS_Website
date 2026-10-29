import { CheckCircle2, ArrowUpRight, CalendarDays, Heart, Users, ShieldCheck } from "lucide-react";
import { FoundationLayout, SocialLinks } from "./foundation-layout";
import { ApplicationForm } from "./application-form";
import {
  ServiceCards,
  AboutSection,
  VisionSection,
  ImpactSection,
  ActivityCards,
  BloodBanner,
} from "./foundation-sections";
import { GalleryView } from "./gallery-view";
import {
  ValuesSection,
  JourneySection,
  GovernanceSection,
  FaqSection,
  VolunteerRoles,
  SupportWays,
  PartnershipList,
  ApproachSection,
  FundsSection,
} from "./content-sections";
import { Button } from "./ui/button";
import { pageTitles, photos, services } from "@/lib/foundation";
import { enquiryTypes, leadershipDuties, mediaTypes } from "@/lib/content";
export function FoundationPage({ page }: { page: string }) {
  const title = pageTitles[page] ?? page;
  return (
    <FoundationLayout>
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">Home</a> / {title}
          </div>
          <h1>{title}</h1>
          <p className="section-copy">Giving Aid to Various People of the Society</p>
        </div>
      </section>
      {page === "about" ? (
        <>
          <AboutSection />
          {/* <VisionSection /> */}
          <ValuesSection />
          <JourneySection />
          <ApproachSection />
          <GovernanceSection />
          <FaqSection />
        </>
      ) : page === "vision-mission" ? (
        <>
          <VisionSection />
          <ValuesSection />
          <FaqSection />
        </>
      ) : page === "our-impact" ? (
        <ImpactSection />
      ) : page === "blood-donation" ? (
        <>
          <BloodBanner />
          <section className="section">
            <div className="wrap">
              <h2 className="section-title mb-5">Register as an interested donor.</h2>
              <p className="section-copy mb-4 max-w-2xl">
                Awareness initiatives may help potential donors understand general eligibility
                considerations, medical screening, donor safety and how to locate appropriate
                authorised donation services.
              </p>
              <p className="section-copy mb-8 max-w-2xl">
                Registration of interest does not establish eligibility to donate. Blood collection,
                testing, storage and medical suitability decisions are solely for appropriately
                authorised medical providers. The foundation is not a blood bank. For a medical
                emergency, contact your local emergency service or hospital directly.
              </p>
              <ApplicationForm kind="donor" />
              <div className="empty-state mt-12">
                <h3 className="font-semibold mb-3">Upcoming blood donation camps</h3>
                <p className="section-copy">
                  No confirmed camps are currently published. Dates, venues, and medical partners
                  will appear once verified.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="section">
          <div className="wrap">
            {page === "services" ? (
              <>
                <div className="eyebrow">OUR CORE FOCUS AREAS</div>
                <h2 className="section-title">
                  A practical framework for community participation.
                </h2>
                <p className="section-copy mt-4 mb-8">
                  Our six core focus areas form a practical framework for identifying social needs,
                  planning relevant initiatives and inviting community participation. Blood donation
                  awareness and practical skills sit within healthcare and education.
                </p>
                <ServiceCards all />
              </>
            ) : page === "gallery" ? (
              <>
                <div className="eyebrow">PHOTO & VIDEO GALLERY</div>
                <h2 className="section-title">Capturing Moments of Service and Togetherness</h2>
                <p className="section-copy mt-4 mb-8">
                  The gallery is for real moments of learning, volunteering, outreach and community
                  participation. Approved photographs and videos will be organised by education,
                  healthcare, women empowerment, environment, youth, community welfare and events,
                  with dates, captions and descriptions. Images of children or vulnerable people
                  require appropriate consent. Stock or illustrative images are not presented as
                  records of the foundation’s work.
                </p>
                <GalleryView />
              </>
            ) : page === "events" ? (
              <>
                <div className="section-heading">
                  <div>
                    <div className="eyebrow">EVENTS & PROGRAMMES</div>
                    <h2 className="section-title">
                      Bringing People Together for Meaningful Action
                    </h2>
                    <p className="section-copy mt-3 max-w-2xl">
                      Events and outreach programmes create opportunities for people to learn,
                      connect, share experience and participate in social causes. Confirmed upcoming
                      activities are kept separate from completed programmes.
                    </p>
                  </div>
                </div>
                <div className="empty-state mb-10">
                  <CalendarDays className="text-primary mb-3" />
                  <h3 className="font-semibold">No confirmed events are published yet</h3>
                  <p className="section-copy mt-3">
                    An upcoming event will include its date, time, location, purpose, eligibility,
                    organiser, contact and registration details. A completed event will add a
                    verified summary, approved photos, participation details and outcomes. The areas
                    below describe the kinds of programmes we aim to offer. They are not scheduled
                    events.
                  </p>
                </div>
                <ActivityCards />
              </>
            ) : page === "volunteer" ? (
              <>
                <VolunteerRoles />
                <div className="inner-layout">
                  <div>
                    <div className="eyebrow">VOLUNTEER WITH US</div>
                    <h2 className="section-title">
                      Give Your Time. Share Your Skills. Make a Difference.
                    </h2>
                    <p className="section-copy my-5">
                      Volunteering offers people an opportunity to contribute knowledge, energy and
                      time to a shared purpose. GAVPS Foundation welcomes expressions of interest
                      from students, professionals, educators, healthcare workers, creatives and
                      community members. The form asks for your name, contact details, city, skills,
                      focus area, availability and explicit privacy consent. Actual participation
                      depends on programme requirements, age restrictions, relevant qualifications
                      and organisational policies.
                    </p>
                    <img
                      className="inner-photo mb-5"
                      src={photos.community}
                      alt="Community volunteers working together"
                      loading="lazy"
                    />
                    <p className="section-copy">
                      Volunteers are expected to treat people with dignity, respect privacy, follow
                      safety guidance, and commit responsibly to agreed activities. Applications are
                      expressions of interest, not a guarantee of placement.
                    </p>
                  </div>
                  <ApplicationForm kind="volunteer" />
                </div>
              </>
            ) : page === "contact" || page === "partner-with-us" ? (
              <div className="inner-layout">
                <div>
                  <div className="eyebrow">
                    {page === "contact" ? "CONTACT US" : "PARTNERSHIPS"}
                  </div>
                  <h2 className="section-title">
                    {page === "contact"
                      ? "Connect With Us. Be Part of a Shared Purpose."
                      : "Collaborating for Stronger Communities"}
                  </h2>
                  <p className="section-copy my-5">
                    {page === "contact"
                      ? "GAVPS Foundation welcomes appropriate enquiries from volunteers, supporters, community members, institutions and media representatives. Communication can be directed to the relevant area so that requests are understood and handled responsibly."
                      : "No single organisation can address every challenge alone. GAVPS Foundation welcomes opportunities to explore appropriate collaborations that combine knowledge, resources and shared responsibility."}
                  </p>
                  {page === "partner-with-us" && <PartnershipList />}
                  <div className="empty-state">
                    <h3 className="font-semibold">Official contact information</h3>
                    <p className="section-copy mt-3">
                      The foundation’s verified address, phone number and email have not yet been
                      supplied. A location map will be added after the address is confirmed.
                      Meanwhile, connect with us on social media:
                    </p>
                    <SocialLinks className="mt-4" />
                  </div>
                  {/* {page === "contact" && (
                    <div className="grid gap-4 mt-6">
                      {enquiryTypes.map((item) => (
                        <div key={item.title}>
                          <h3 className="font-semibold text-ink">{item.title}</h3>
                          <p className="section-copy">{item.copy}</p>
                        </div>
                      ))}
                    </div>
                  )} */}
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-ink mb-7">
                    {page === "contact" ? "Send an enquiry" : "Tell us about your partnership"}
                  </h2>
                  <ApplicationForm kind={page === "contact" ? "contact" : "partner"} />
                </div>
              </div>
            ) : page === "donate" ? (
              <>
                <div className="inner-layout">
                  <div>
                    <Heart size={36} className="text-primary" />
                    <h2 className="section-title">Turning Generosity into Opportunity</h2>
                    <p className="section-copy my-5">
                      Every contribution represents a belief in positive change. GAVPS Foundation
                      values eligible financial contributions, materials, professional expertise,
                      volunteer time and suitable institutional support. Support may be allocated to
                      approved educational, empowerment, healthcare awareness, environmental and
                      social welfare activities, subject to available resources and legal
                      conditions.
                    </p>
                    <div className="empty-state">
                      <h3 className="font-semibold">Online donations are not yet open.</h3>
                      <p className="section-copy mt-3">
                        Verified payment information and donation terms are still required. We do
                        not collect money or display unverified bank details. An 80G tax benefit
                        statement will be shown only after verification.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-7">
                      <Button asChild>
                        <a href="/volunteer">
                          Volunteer with us
                          <ArrowUpRight />
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="/partner-with-us">Discuss support</a>
                      </Button>
                    </div>
                  </div>
                  <img
                    className="inner-photo"
                    src={photos.education}
                    alt="Educational support illustration"
                    loading="lazy"
                  />
                </div>
                <SupportWays />
              </>
            ) : page === "our-team" ? (
              <>
                <Users className="text-primary" size={36} />
                <h2 className="section-title">
                  Guided by Purpose. Committed to Responsible Leadership.
                </h2>
                <p className="section-copy mt-4">
                  Strong governance helps translate charitable objectives into effective and
                  responsible action. Organisational leadership is responsible for appropriate
                  direction, ethical conduct, oversight, recordkeeping and compliance.
                </p>
                <p className="section-copy mt-4">
                  We recognise the importance of listening to communities, encouraging
                  collaboration, respecting stakeholder interests and overseeing resources.
                </p>
                <ul className="grid md:grid-cols-2 gap-2 mt-6">
                  {leadershipDuties.map((duty) => (
                    <li key={duty} className="check-line">
                      <CheckCircle2 />
                      {duty}
                    </li>
                  ))}
                </ul>
                <div className="empty-state mt-8">
                  <p className="section-copy">
                    Verified director names, designations, approved photographs and concise
                    professional profiles will be published here after confirmation. No member names
                    are shown until then.
                  </p>
                </div>
                <Button asChild className="mt-6">
                  <a href="/volunteer">
                    Join the community
                    <ArrowUpRight />
                  </a>
                </Button>
              </>
            ) : page === "press-releases" ? (
              <>
                <div className="eyebrow">NEWS, PRESS & MEDIA</div>
                <h2 className="section-title">Sharing Our Journey and Community Updates</h2>
                <p className="section-copy mt-4">
                  This area presents official foundation announcements, confirmed event information,
                  documented programme summaries and approved media coverage. Accurate public
                  communication helps build confidence among supporters and community members.
                </p>
                <div className="grid md:grid-cols-3 gap-5 mt-8">
                  {mediaTypes.map((item) => (
                    <div className="service-card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  ))}
                </div>
                <div className="empty-state mt-8">
                  <p className="section-copy">
                    No official entries are published yet. Each item will include a clear title,
                    publication date, short summary and an accessible article or file link.
                  </p>
                </div>
                <div className="mt-12">
                  <h3 className="font-display text-xl font-semibold text-ink mb-4">
                    Stay in the loop
                  </h3>
                  <p className="section-copy mb-4">
                    Register your interest in foundation updates. Newsletter delivery will begin
                    after official email sending is configured.
                  </p>
                  <ApplicationForm kind="newsletter" />
                </div>
              </>
            ) : page === "privacy-policy" ? (
              <PrivacyContent />
            ) : null}
          </div>
        </section>
      )}
      {page === "donate" && <FundsSection />}
      {page === "contact" && <FaqSection background />}
    </FoundationLayout>
  );
}
function PrivacyContent() {
  return (
    <div className="max-w-3xl">
      <ShieldCheck size={35} className="text-primary" />
      <h2 className="section-title">Your trust matters.</h2>
      <p className="section-copy mt-5">
        This is an initial privacy notice for the website’s enquiry and interest forms. The
        foundation must confirm its legal contact details and retention schedule before wider public
        launch.
      </p>
      {[
        [
          "Information we collect",
          "When you choose to submit a form, we collect the details you provide, including your name, email, phone, city, interests, availability, and message. Donor interest forms may include an optional blood group. Please do not include medical histories or sensitive documents.",
        ],
        [
          "Why we collect it",
          "Your details are used to receive your enquiry and consider volunteer, donor, event, or partnership interest. Newsletter consent is used only for updates you request.",
        ],
        [
          "Privacy and access",
          "Applications are stored in the foundation’s private database. Individual submissions and donor information are not available on public pages. No public donor directory is maintained.",
        ],
        [
          "Your choices",
          "Submitting a form requires your explicit consent. You can ask the foundation to access, correct, or delete your information using the contact enquiry form. An official privacy email and a retention period are awaiting confirmation.",
        ],
        [
          "Medical information",
          "Registering donor interest does not establish medical eligibility and does not guarantee blood availability. Eligibility decisions belong to qualified healthcare professionals.",
        ],
        [
          "Website photography",
          "Current photographs are AI-generated illustrations, not evidence of foundation events or identifiable beneficiaries. Real stories and photographs require verified information and appropriate consent.",
        ],
      ].map(([title, copy]) => (
        <section className="mt-8" key={title}>
          <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
          <p className="section-copy mt-3">{copy}</p>
        </section>
      ))}
    </div>
  );
}
export function ServiceDetail({ slug }: { slug: string }) {
  const s = services.find((s) => s.slug === slug);
  if (!s)
    return (
      <FoundationLayout>
        <div className="section wrap">
          <h1 className="section-title">Service not found</h1>
          <a href="/services" className="text-link">
            Explore our services
          </a>
        </div>
      </FoundationLayout>
    );
  return (
    <FoundationLayout>
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">Home</a> / <a href="/services">Our Services</a> / {s.title}
          </div>
          <h1>{s.title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap inner-layout">
          <img className="inner-photo" src={s.image} alt={s.title} loading="lazy" />
          <div>
            <div className="service-icon">
              <s.icon />
            </div>
            <h2 className="section-title">{s.headline}</h2>
            {s.intro.map((p) => (
              <p key={p} className="section-copy mt-4">
                {p}
              </p>
            ))}
            <h3 className="font-display text-lg font-semibold text-ink mt-7 mb-3">
              Areas of engagement
            </h3>
            <ul className="grid gap-2">
              {s.points.map((p) => (
                <li key={p} className="check-line">
                  <CheckCircle2 />
                  {p}
                </li>
              ))}
            </ul>
            <div className="empty-state mt-6">
              <strong className="text-ink">Our objective:</strong>{" "}
              <span className="section-copy">{s.objective}</span>
            </div>
            <Button asChild className="mt-7">
              <a href={s.slug === "blood-donation" ? "/blood-donation" : "/volunteer"}>
                {s.cta}
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </FoundationLayout>
  );
}
