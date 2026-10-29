import { FoundationLayout } from "@/components/foundation-layout";
import { activities } from "@/components/foundation-sections";
import { Button } from "@/components/ui/button";

export function EventDetail({ slug }: { slug: string }) {
  const activity = activities.find((item) => item.slug === slug);
  if (!activity) return null;
  return (
    <FoundationLayout>
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/events">Events & Activities</a> / {activity.category}
          </div>
          <h1>{activity.title}</h1>
          <span className="tag">Illustrative activity · not a scheduled event</span>
        </div>
      </section>
      <section className="section">
        <div className="wrap inner-layout">
          <img className="inner-photo" src={activity.image} alt={activity.title} />
          <div>
            <p className="section-copy">{activity.copy}</p>
            <div className="empty-state my-7">
              <h2 className="font-semibold">Date, venue, and registration pending</h2>
              <p className="section-copy mt-3">
                This describes a kind of programme, not a verified event. A confirmed activity will
                publish its date, time, location, purpose, eligibility, organiser, contact and
                registration details.
              </p>
            </div>
            <Button asChild>
              <a href="/volunteer">Express volunteer interest</a>
            </Button>
          </div>
        </div>
      </section>
    </FoundationLayout>
  );
}
