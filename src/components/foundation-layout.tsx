import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  Heart,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  HandHeart,
} from "lucide-react";
const logoUrl = "/images/gavps-logo.png";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/foundation";
const socialIcons = [Facebook, Instagram, Youtube, Twitter];
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`social-row ${className}`}>
      {socialLinks.map((s, i) => {
        const Icon = socialIcons[i]!;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GAVPS Foundation on ${s.name}`}
            title={s.name}
          >
            <Icon size={15} />
          </a>
        );
      })}
    </div>
  );
}
const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Services", "/services"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];
const more = [
  ["Vision & Mission", "/vision-mission"],
  ["Press Releases", "/press-releases"],
  ["Blood Donation", "/blood-donation"],
  ["Our Team", "/our-team"],
  ["Our Impact", "/our-impact"],
  ["Partner With Us", "/partner-with-us"],
];
export function FoundationLayout({
  children,
  home = false,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hindi, setHindi] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <>
      <header
        className={`site-header ${!home ? "solid" : ""} ${home && scrolled ? "scrolled" : ""}`}
      >
        <div className="topbar">
          <p className="topbar-slogan">Giving Aid to Various People of the Society</p>
        </div>
        <div className="wrap nav-row">
          <Link to="/" aria-label="GAVPS Foundation home">
            <img
              className="logo"
              src={logoUrl}
              width={1494}
              height={768}
              alt="GAVPS Foundation — Giving Aid to Various People of the Society"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.slice(0, 2).map(([label, path], i) => (
              <a key={path} href={path}>
                {hindi ? ["होम", "हमारे बारे में"][i] : label}
              </a>
            ))}
            <details className="nav-dropdown">
              <summary>
                {hindi ? "हमारे कार्य" : "Our Work"}
                <ChevronDown size={12} />
              </summary>
              <div className="nav-dropdown-panel">
                {[...links.slice(2, 3), ...more].map(([label, path]) => (
                  <a key={path} href={path}>
                    {label}
                  </a>
                ))}
              </div>
            </details>
            {links.slice(3).map(([label, path], i) => (
              <a key={path} href={path}>
                {hindi ? ["कार्यक्रम", "गैलरी", "संपर्क"][i] : label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild size="sm">
              <a href="/donate">
                <Heart size={14} />
                {hindi ? "दान करें" : "Donate"}
              </a>
            </Button>
            <Button
              asChild
              variant={home && !scrolled ? "hero" : "outline"}
              size="sm"
              className="nav-join"
            >
              <a href="/volunteer">
                {hindi ? "जुड़ें" : "Join Us"}
                <ArrowUpRight size={13} />
              </a>
            </Button>
            <Button
              className="mobile-toggle"
              size="icon"
              variant="ghost"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map(([label, path]) => (
              <a key={path} href={path}>
                {label}
              </a>
            ))}
            <details>
              <summary>More about GAVPS</summary>
              <div className="grid gap-4 py-4">
                {more.map(([label, path]) => (
                  <a key={path} href={path}>
                    {label}
                  </a>
                ))}
              </div>
            </details>
            <a href="/volunteer">Join as Volunteer</a>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <img className="footer-logo" src={logoUrl} alt="GAVPS Foundation" loading="lazy" />
              <p>
                <b>Giving Aid to Various People of the Society.</b>
                <br />  <br />
                Together, we can build a kinder,<br/> more inclusive tomorrow.
              </p>
              {/* <div className="flex gap-4">
                <HandHeart size={19} />
                <span className="text-xs">Compassion in action.</span>
              </div> */}
              {/* <SocialLinks className="mt-4" /> */}
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                {[...links.slice(1), ...more.slice(0, 1)].map(([label, path]) => (
                  <a href={path} key={path}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3>Get Involved</h3>
              <div className="footer-links">
                <a href="/volunteer">Become a Volunteer</a>
                <a href="/blood-donation">Register Donor Interest</a>
                <a href="/partner-with-us">Partner With Us</a>
                <a href="/donate">Support Our Mission</a>
                <a href="/press-releases">Press Releases</a>
              </div>
            </div>
            <div>
              <h3>Let’s stay connected</h3>
              <p>Be part of a community that cares.</p>
              <Button asChild variant="hero">
                <a href="/contact">
                  Get in touch
                  <ArrowUpRight />
                </a>
              </Button>
              <SocialLinks className="mt-4" />
              <p>Official address and contact details will be added after verification.</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 GAVPS Foundation. All rights reserved.</span>
            <span>
              Photography is AI-generated and illustrative, not a record of foundation activities.
            </span>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </footer>
      {scrolled && (
        <Button
          size="icon"
          className="back-top"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            })
          }
        >
          <ArrowUp />
        </Button>
      )}
    </>
  );
}
