import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  Users,
  HandHeart,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, photos } from "@/lib/foundation";
import { impactMeasures } from "@/lib/content";
export function ServiceCards({ all = false }: { all?: boolean }) {
  return (
    <div className="service-grid">
      {services.slice(0, all ? 8 : 6).map((s) => (
        <a href={`/services/${s.slug}`} className="service-card" key={s.slug}>
          <div className="service-icon">
            <s.icon size={24} strokeWidth={1.6} />
          </div>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <span className="text-link">
            Discover more
            <ArrowRight />
          </span>
        </a>
      ))}
    </div>
  );
}
export function AboutSection({ summary = false }: { summary?: boolean }) {
  return (
    <section className="section">
      <div className={`wrap ${summary ? "about-grid" : "about-layout"}`}>
        <div className="image-collage">
          <img
            className="main-photo"
            src={photos.community}
            alt="Volunteers caring for the environment"
            width={1536}
            height={1024}
            loading="lazy"
          />
          <div className="image-note">
            <HandHeart size={24} />
            <span>
              One community.
              <br />
              <strong>Countless possibilities.</strong>
            </span>
          </div>
          <img
            className="small-photo"
            src={photos.education}
            alt="Children learning together"
            width={1920}
            height={1088}
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <div className="eyebrow">{summary ? "ABOUT GAVPS FOUNDATION" : "WHO WE ARE"}</div>
          <h2 className="section-title">
            Building Stronger Communities.
            <br />
            <span>Creating Better Opportunities.</span>
          </h2>
          {summary ? (
            <>
              <p className="section-copy mt-5">
                Established on 20 July 2023, GAVPS Foundation is a registered Section 8 non-profit
                organisation dedicated to empowering communities and creating meaningful social
                change.
              </p>
              <p className="section-copy mt-4">
                Our initiatives focus on education, women empowerment, healthcare, skill
                development, environmental protection, youth development, and social welfare.
              </p>
              <p className="section-copy mt-4">
                We believe that every individual deserves the opportunity to learn, grow, and live
                with dignity. Through community participation, collaborative partnerships, and
                responsible action, we strive to build a more inclusive, compassionate, and
                sustainable society.
              </p>
              <p className="section-copy mt-4">
                Together, we can turn compassion into action and create a brighter future for all.
              </p>
              <Button asChild className="mt-5" size="lg">
                <a href="/about">
                  Discover Our Story
                  <ArrowUpRight />
                </a>
              </Button>
            </>
          ) : (
            <AboutStory />
          )}
        </div>
      </div>
    </section>
  );
}

function AboutStory() {
  return (
    <>
      <p className="section-copy mt-5">
        Established on 20 July 2023, GAVPS Foundation is a Section 8 non-profit organisation
        incorporated under the Companies Act, 2013, in India. The foundation is committed to
        promoting social welfare, inclusive development and community empowerment through
        responsible and meaningful initiatives.
      </p>
      <p className="section-copy mt-4">
        We believe a stronger society begins when people have access to education, essential
        healthcare information, skill development opportunities, a healthy environment and the
        support needed to build dignified and fulfilling lives.
      </p>
      <p className="section-copy mt-4">
        Our focus spans education, women empowerment, healthcare and well-being, environmental
        protection, youth development, social awareness and humanitarian support. These challenges
        are interconnected: educational opportunity is shaped by family circumstances, economic
        independence is influenced by access to skills, and public health is affected by awareness
        and environmental conditions.
      </p>
      <h3 className="font-display text-xl font-semibold text-ink mt-6">Our Purpose</h3>
      <p className="section-copy mt-3">
        Our purpose is to contribute towards a society where opportunities are not limited by social
        or economic disadvantage. We aim to connect people with information, resources, learning
        opportunities and collaborative support that encourage confidence, self-reliance and
        meaningful participation.
      </p>
      <p className="section-copy mt-4">
        We see social development not as an isolated act of charity but as an ongoing, shared
        responsibility. Community members should be respected as participants in solutions, not
        simply recipients of support.
      </p>
      <h3 className="font-display text-xl font-semibold text-ink mt-6 mb-3">What Guides Us</h3>
      <div>
        <p className="check-line">
          <CheckCircle2 />
          Understand real community needs before planning initiatives.{" "}
        </p>
        <p className="check-line">
          <CheckCircle2 />
          Encourage education, awareness and skills as pathways to long-term empowerment.{" "}
        </p>
        <p className="check-line">
          <CheckCircle2 />
          Invite volunteers, institutions and responsible organisations to collaborate.{" "}
        </p>
        <p className="check-line">
          <CheckCircle2 />
          Use resources responsibly and maintain appropriate organisational records.{" "}
        </p>
        <p className="check-line">
          <CheckCircle2 />
          Respect dignity, inclusion, environmental responsibility and sustainability.{" "}
        </p>
        <p className="check-line">
          <CheckCircle2 />
          Review programmes and learn from the people they are intended to serve.{" "}
        </p>
      </div>

      <div className="mt-5">
        <p className="check-line">
          Our belief: When individuals are empowered, families become stronger; when families become
          stronger, communities progress.{" "}
        </p>
      </div>
    </>
  );
}
export function CauseStrip() {
  return (
    <div className="cause-strip">
      <div className="wrap">
        {[
          { icon: BookOpen, title: "Education for All", copy: "Opening doors to opportunity" },
          {
            icon: HeartPulse,
            title: "Health & Wellbeing",
            copy: "Healthier lives, stronger communities",
          },
          { icon: Users, title: "Community Empowerment", copy: "Growing stronger, together" },
          { icon: HandHeart, title: "Compassion in Action", copy: "Small acts. Lasting change." },
        ].map((s) => (
          <div className="cause-item" key={s.title}>
            <s.icon />
            <div>
              <strong>{s.title}</strong>
              <p>{s.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export function ImpactSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="eyebrow">OUR IMPACT</div>
        <h2 className="section-title">Measuring What Matters. Sharing Stories That Inspire.</h2>
        <p className="section-copy mt-4">
          Meaningful social impact should reflect changes in knowledge, opportunities, participation
          or well-being, not merely the number of activities organised. We aim to document relevant
          outputs and outcomes accurately and improve our programmes through practical feedback.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {impactMeasures.map((measure) => (
            <div className="service-card" key={measure.title}>
              <h3>{measure.title}</h3>
              <p>{measure.copy}</p>
            </div>
          ))}
        </div>
        <div className="empty-state mt-8">
          <p className="section-copy">
            Community stories use real experiences, informed consent and respectful language.
            Invented testimonials and identifiable photographs are not published without proper
            authorisation. Verified results will appear here when they are documented.
          </p>
        </div>
      </div>
    </section>
  );
}
const visionPoints = [
  {
    title: "Inclusive Opportunities",
    copy: "Fair opportunities for children, young people, women and underserved communities.",
  },
  {
    title: "Learning and Growth",
    copy: "Education and practical skills that strengthen confidence and decision-making.",
  },
  {
    title: "Healthy Communities",
    copy: "Preventive health knowledge, hygiene and access to reliable information.",
  },
  {
    title: "Empowered Families",
    copy: "Awareness, confidence and pathways towards self-reliance.",
  },
  {
    title: "Environmental Responsibility",
    copy: "Protection of natural resources through informed and sustainable practices.",
  },
  {
    title: "Collective Responsibility",
    copy: "People and institutions working together to address shared challenges.",
  },
];

const missionPoints = [
  {
    title: "Education and Learning",
    copy: "Encourage educational awareness, mentoring, career guidance and practical skills.",
  },
  {
    title: "Social and Economic Empowerment",
    copy: "Promote skills, information and participation for women, youth and underserved individuals.",
  },
  {
    title: "Healthcare Awareness",
    copy: "Support preventive health education, hygiene awareness and responsible blood donation mobilisation.",
  },
  {
    title: "Environmental Sustainability",
    copy: "Encourage conservation, cleanliness and responsible use of resources.",
  },
  {
    title: "Community Participation",
    copy: "Engage volunteers, institutions and communities in meaningful social initiatives.",
  },
  {
    title: "Ethical Accountability",
    copy: "Maintain appropriate records, responsible conduct and compliant organisational practices.",
  },
];

export function VisionSection() {
  return (
    <section className="section bg-soft-blue">
      <div className="wrap">
        <div className="eyebrow">OUR VISION</div>
        <h2 className="section-title">A Society Where Everyone Has the Opportunity to Thrive</h2>
        <p className="section-copy mt-5">
          To build an inclusive, empowered, compassionate and sustainable society where every
          individual has opportunities to learn, grow, live with dignity and contribute meaningfully
          to the progress of their community.
        </p>
        <p className="section-copy mt-4">
          We envision communities where education encourages aspiration, equal opportunity promotes
          independence, health awareness supports well-being, and environmental responsibility
          protects future generations.
        </p>
        <p className="section-copy mt-4">
          Our vision goes beyond addressing immediate needs. It is to encourage conditions where
          people can make informed choices, develop abilities, take part in community decisions and
          build a more secure future.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {visionPoints.map((point) => (
            <div className="service-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </div>
          ))}
        </div>
        <div className="empty-state mt-8">
          <h3 className="font-display text-lg font-semibold text-ink">
            A future of dignity, opportunity and sustainable progress for all.
          </h3>
        </div>
        <div className="mt-16">
          <div className="eyebrow">OUR MISSION</div>
          <h2 className="section-title">Turning Compassion into Purposeful Action</h2>
          <p className="section-copy mt-5">
            To design, support and implement responsible social welfare initiatives that respond to
            community needs, promote inclusion, strengthen individual capabilities and encourage
            sustainable opportunities for a better future.
          </p>
          <p className="section-copy mt-4">
            Our mission combines awareness, education, community engagement, collaboration and
            practical action. We seek to identify important challenges and explore solutions that
            are relevant to local circumstances, available resources and long-term development
            goals.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {missionPoints.map((point) => (
              <div className="service-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </div>
            ))}
          </div>
          <div className="empty-state mt-8">
            <h3 className="font-display text-lg font-semibold text-ink">
              We aim to move from mission to action by understanding needs, setting goals,
              mobilising support, implementing responsibly and reviewing outcomes.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export const activities = [
  {
    slug: "educational-workshops",
    title: "Educational Workshops",
    category: "Education",
    image: photos.education,
    copy: "Programmes related to learning, careers, technology awareness and life skills.",
  },
  {
    slug: "healthcare-awareness",
    title: "Healthcare & Blood Donation Awareness",
    category: "Healthcare",
    image: photos.healthcare,
    copy: "Community education and appropriately authorised partner-led initiatives.",
  },
  {
    slug: "environmental-campaigns",
    title: "Environmental Campaigns",
    category: "Environment",
    image: photos.community,
    copy: "Cleanliness drives, conservation education and suitable green activities.",
  },
  {
    slug: "women-youth-development",
    title: "Women & Youth Development",
    category: "Community",
    image: photos.community,
    copy: "Skill awareness, mentorship, confidence and leadership activities.",
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    category: "Community",
    image: photos.education,
    copy: "Responsible efforts to understand and address selected local needs.",
  },
];
export function ActivityCards() {
  return (
    <div className="photo-grid">
      {activities.map((a) => (
        <article className="photo-card" key={a.slug}>
          <img src={a.image} alt={a.title} loading="lazy" width={1536} height={1024} />
          <div className="photo-card-body">
            <span className="tag">{a.category} · Focus area, not a scheduled event</span>
            <h3>{a.title}</h3>
            <p className="section-copy text-xs mb-4">{a.copy}</p>
            <a className="text-link" href={`/events/${a.slug}`}>
              Explore activity
              <ArrowRight />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
export function BloodBanner() {
  return (
    <section className="campaign">
      <img
        src={photos.blood}
        alt="Blood donation under professional supervision"
        width={1536}
        height={1024}
        loading="lazy"
      />
      <div className="campaign-content">
        <div className="eyebrow">BLOOD DONATION AWARENESS</div>
        <h2 className="section-title">A Simple Act of Kindness Can Support a Life in Need</h2>
        <p className="section-copy my-5">
          Voluntary blood donation is an important part of healthcare support. We encourage informed
          participation and accurate awareness with authorised blood centres and qualified
          healthcare professionals.
        </p>
        <Button asChild size="lg">
          <a href="/blood-donation">
            Register Donor Interest
            <ArrowUpRight />
          </a>
        </Button>
        <p className="text-[10px] leading-5 text-muted-foreground mt-4">
          Registration of interest does not establish eligibility to donate. Blood collection,
          testing, storage and medical suitability decisions belong solely to authorised medical
          providers. The foundation is not a blood bank.
        </p>
      </div>
    </section>
  );
}
