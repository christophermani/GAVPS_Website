import { useState } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Flag,
  Handshake,
  BookOpen,
  HeartPulse,
  Sprout,
  CalendarDays,
  Monitor,
  Users,
  Gift,
  Building2,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  values,
  journey,
  volunteerRoles,
  volunteerBenefits,
  supportWays,
  partnerships,
  credentials,
  faqs,
  approachPrinciples,
  howWeWork,
  fundsPrinciples,
  contributionUses,
} from "@/lib/content";

export function ValuesSection() {
  return (
    <section className="section bg-soft-blue">
      <div className="wrap">
        <div className="eyebrow">OUR VALUES</div>
        <h2 className="section-title">Our Values & Guiding Beliefs</h2>
        <p className="section-copy mt-4">
          Our values guide how we serve communities, manage our work and engage with volunteers,
          donors and partner institutions.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {values.map((value) => (
            <div className="service-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="section bg-muted">
      <div className="wrap">
        <div className="eyebrow">OUR JOURNEY</div>
        <h2 className="section-title">A Journey Rooted in Service</h2>
        <p className="section-copy mt-4 mb-10">
          Every meaningful journey begins with a purpose. GAVPS Foundation was established to
          encourage community development, social welfare and collective responsibility.
        </p>
        <ol className="grid md:grid-cols-3 gap-6">
          {journey.map((j, i) => (
            <li key={j.title} className="service-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="service-icon mb-0">
                  {i === 0 ? <Flag /> : i === 1 ? <Handshake /> : <ArrowUpRight />}
                </div>
                <span className="tag">{j.when}</span>
              </div>
              <h3>{j.title}</h3>
              <p>{j.copy}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-muted-foreground mt-6">
          Dated milestones, activity photographs and claims of achievements are added only when
          supported by documentary records.
        </p>
      </div>
    </section>
  );
}

const roleIcons = [BookOpen, HeartPulse, Sprout, CalendarDays, Monitor, Users];
export function VolunteerRoles() {
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <div className="mb-12">
      <h3 className="font-display text-xl font-semibold text-ink mb-2">How you can contribute</h3>
      <p className="section-copy mb-6">
        Opportunities may involve educational support, event coordination, environmental
        initiatives, outreach, communications or digital skills. Actual participation depends on
        programme requirements, age restrictions, relevant qualifications and organisational
        policies.
      </p>
      <div className="service-grid">
        {volunteerRoles.map((r, i) => {
          const Icon = roleIcons[i]!;
          const on = picked === r.title;
          return (
            <button
              type="button"
              key={r.title}
              onClick={() => setPicked(on ? null : r.title)}
              aria-pressed={on}
              className={`service-card text-left transition ${on ? "ring-2 ring-primary" : ""}`}
            >
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{r.title}</h3>
              <p>{r.copy}</p>
              {on && (
                <span className="text-link mt-3">
                  <CheckCircle2 />
                  Mention this role in the form below
                </span>
              )}
            </button>
          );
        })}
      </div>
      <ul className="grid md:grid-cols-2 gap-2 mt-8">
        {volunteerBenefits.map((benefit) => (
          <li key={benefit} className="check-line">
            <CheckCircle2 />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

const supportIcons = [Gift, Building2, Handshake, ShieldCheck, Landmark];
export function SupportWays() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {supportWays.map((s, i) => {
        const Icon = supportIcons[i]!;
        return (
          <div key={s.title} className="service-card">
            <div className="service-icon">
              <Icon />
            </div>
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
          </div>
        );
      })}
    </div>
  );
}

export function PartnershipList() {
  return (
    <div className="mt-10">
      <h3 className="font-display text-lg font-semibold text-ink mb-4">
        Partnership opportunities
      </h3>
      <div className="grid gap-4">
        {partnerships.map((partner) => (
          <div key={partner.title}>
            <h4 className="font-semibold text-ink">{partner.title}</h4>
            <p className="section-copy">{partner.copy}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        CSR implementing-agency arrangements are subject to applicable requirements and must not be
        advertised as approved until verified. Partnership discussions should define objectives,
        responsibilities and reporting expectations.
      </p>
    </div>
  );
}

export function ApproachSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">OUR APPROACH</div>
        <h2 className="section-title">
          Compassion with <span>accountability.</span>
        </h2>
        <p className="section-copy mt-4 font-semibold text-ink">
          Thoughtful Planning. Responsible Action. Meaningful Impact.
        </p>
        <p className="section-copy mt-4">
          We believe that creating lasting social change requires more than good intentions. It
          requires listening to communities, careful planning, collaborative participation, ethical
          conduct and continuous learning.
        </p>
        <p className="section-copy mt-4">
          Compassion motivates our purpose; accountability guides how we act. Our approach seeks to
          balance human understanding with organisational responsibility.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {approachPrinciples.map((principle) => (
            <div className="service-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-ink mb-6">How We Aim to Work</h3> 
          <ol className="grid md:grid-cols-1 gap-0 list-none p-0 m-0">
            {howWeWork.map((step, index) => (
              <li key={step} className=" ">
                <p className="check-line margin-0 "  >
                  <CheckCircle2 />
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <div className="empty-state mt-8">
            <h3 className="font-display text-lg font-semibold text-ink">
              Compassion inspires our purpose. Accountability strengthens our actions.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FundsSection() {
  return (
    <section className="section bg-muted">
      <div className="wrap">
        <div className="eyebrow">RESPONSIBLE USE OF FUNDS</div>
        <h2 className="section-title mb-3">
          Every Contribution Matters. <span>Every Responsibility Counts.</span>
        </h2>
        <p className="section-copy mt-4">
          Donations, grants and other permitted contributions represent more than financial support:
          they express confidence in the foundation and its charitable purposes.
        </p>
        <p className="section-copy mt-4 mb-8">
          As a Section 8 company, GAVPS Foundation operates on a non-profit basis. Income and
          profits are applied towards promoting its stated objectives and dividends are not
          distributed to members. Contributions must be handled in line with applicable law,
          relevant terms and organisational governance requirements.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {fundsPrinciples.map((f) => (
            <div key={f.title} className="service-card">
              <div className="service-icon">
                <Landmark />
              </div>
              <h3>{f.title}</h3>
              <p>{f.copy}</p>
            </div>
          ))}
        </div>
        <h3 className="font-display text-xl font-semibold text-ink mt-10 mb-4">
          Where Contributions May Help
        </h3>
        <ul className="grid md:grid-cols-2 gap-2">
          {contributionUses.map((use) => (
            <li key={use} className="check-line">
              <CheckCircle2 />
              {use}
            </li>
          ))}
        </ul>
        <p className="section-copy mt-8">
          Where appropriate, the website can publish annual reports, audited financial statements,
          programme reports and verified organisational documents. Such documents are not described
          as available before they are approved and published.
        </p>
      </div>
    </section>
  );
}

export function GovernanceSection() {
  return (
    <section className="section bg-soft-blue">
      <div className="wrap">
        <div className="eyebrow">COMPLIANCE & CREDENTIALS</div>
        <h2 className="section-title">Strengthening Trust Through Compliance</h2>
        <p className="section-copy mt-4">
          Legal compliance, ethical governance and institutional accountability are important to
          responsible non-profit management. The foundation seeks to maintain suitable
          documentation, observe statutory obligations and communicate accurately about its
          registrations and approvals.
        </p>
        <p className="section-copy mt-4">
          Approved registration certificates, relevant statutory credentials, organisational
          policies, annual reports and governance information may be made available once they are
          verified. Certificate numbers and current validity have not been supplied for publication.
          No approval is labelled active, registered or certified until the original records are
          checked.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {credentials.map(([title, copy]) => (
            <div key={title} className="service-card">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck size={18} className="text-primary" />
                <h3 className="m-0">{title}</h3>
              </div>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ background = false }: { background?: boolean }) {
  return (
    <section className={background ? "section bg-soft-blue" : "section"}>
      <div className="wrap">
        <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
        <h2 className="section-title mb-6">
          Questions? <span>We have answers.</span>
        </h2>
        <div>
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base text-ink">
                {q}
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="section-copy mt-3">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GetInvolved() {
  return (
    <section className="bg-muted py-16">
      <div className="wrap flex flex-wrap justify-between items-center gap-8">
        <div className="max-w-xl">
          <div className="eyebrow">GET INVOLVED</div>
          <h2 className="section-title">Be part of the change.</h2>
          <p className="section-copy mt-3">
            You do not need to make a big commitment to make a meaningful difference. Your time,
            skills, knowledge, and support can help strengthen communities.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="/volunteer">
              Become a Volunteer
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/donate">Support Our Cause</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="/partner-with-us">Partner With Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
