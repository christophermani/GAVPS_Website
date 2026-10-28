import { useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { EventDetail } from "@/components/event-detail";
import { FoundationPage, ServiceDetail } from "@/components/foundation-page";
import { HomePage } from "@/components/home-page";
import { NotFound } from "@/components/not-found";
import { PressUnavailable } from "@/components/press-unavailable";
import { activities } from "@/components/foundation-sections";
import { pageTitles, services } from "@/lib/foundation";

function usePageTitle(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FoundationRoute({ page }: { page: string }) {
  const title = pageTitles[page] ?? "GAVPS Foundation";
  usePageTitle(
    `${title} | GAVPS Foundation`,
    `Explore ${title} at GAVPS Foundation. Giving Aid to Various People of the Society.`,
  );
  return <FoundationPage page={page} />;
}

function ServiceRoute() {
  const { slug = "" } = useParams();
  const service = services.find((item) => item.slug === slug);
  usePageTitle(
    `${service?.title ?? "Our Services"} | GAVPS Foundation`,
    service?.description ?? "GAVPS Foundation community services.",
  );
  if (!service) return <NotFound />;
  return <ServiceDetail slug={slug} />;
}

function EventRoute() {
  const { slug = "" } = useParams();
  const activity = activities.find((item) => item.slug === slug);
  usePageTitle(
    `${activity?.title ?? "Activity"} | GAVPS Foundation`,
    activity?.copy ?? "GAVPS Foundation activity",
  );
  if (!activity) return <NotFound />;
  return <EventDetail slug={slug} />;
}

function PressRoute() {
  usePageTitle(
    "Press Release Unavailable | GAVPS Foundation",
    "Official GAVPS Foundation press releases will be published after approval.",
  );
  return <PressUnavailable />;
}

function HomeRoute() {
  usePageTitle(
    "Empowering Communities. Serving Society. | GAVPS Foundation",
    "GAVPS Foundation — Giving Aid to Various People of the Society. Explore education, healthcare, community support, and opportunities to volunteer.",
  );
  return <HomePage />;
}

function MissingRoute() {
  usePageTitle(
    "Page not found | GAVPS Foundation",
    "The page you're looking for doesn't exist or has been moved.",
  );
  return <NotFound />;
}

export function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<FoundationRoute page="about" />} />
        <Route path="/vision-mission" element={<FoundationRoute page="vision-mission" />} />
        <Route path="/services" element={<FoundationRoute page="services" />} />
        <Route path="/services/:slug" element={<ServiceRoute />} />
        <Route path="/events" element={<FoundationRoute page="events" />} />
        <Route path="/events/:slug" element={<EventRoute />} />
        <Route path="/gallery" element={<FoundationRoute page="gallery" />} />
        <Route path="/press-releases" element={<FoundationRoute page="press-releases" />} />
        <Route path="/press-releases/:slug" element={<PressRoute />} />
        <Route path="/blood-donation" element={<FoundationRoute page="blood-donation" />} />
        <Route path="/volunteer" element={<FoundationRoute page="volunteer" />} />
        <Route path="/our-team" element={<FoundationRoute page="our-team" />} />
        <Route path="/our-impact" element={<FoundationRoute page="our-impact" />} />
        <Route path="/partner-with-us" element={<FoundationRoute page="partner-with-us" />} />
        <Route path="/donate" element={<FoundationRoute page="donate" />} />
        <Route path="/contact" element={<FoundationRoute page="contact" />} />
        <Route path="/privacy-policy" element={<FoundationRoute page="privacy-policy" />} />
        <Route path="*" element={<MissingRoute />} />
      </Routes>
    </>
  );
}
