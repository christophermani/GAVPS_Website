import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const routes = [
  'path="/"',
  'path="/about"',
  'path="/vision-mission"',
  'path="/services"',
  'path="/services/:slug"',
  'path="/events"',
  'path="/events/:slug"',
  'path="/gallery"',
  'path="/press-releases"',
  'path="/press-releases/:slug"',
  'path="/blood-donation"',
  'path="/volunteer"',
  'path="/our-team"',
  'path="/our-impact"',
  'path="/partner-with-us"',
  'path="/donate"',
  'path="/contact"',
  'path="/privacy-policy"',
];

describe("App routing", () => {
  it("registers a React route for each public page", () => {
    const source = readFileSync(path.join(process.cwd(), "src/App.tsx"), "utf8");
    for (const route of routes) {
      expect(source, route).toContain(route);
    }
  });
});
