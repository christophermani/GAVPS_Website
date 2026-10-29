import { describe, expect, it } from "vitest";
import { submissionSchema } from "@/lib/submission-schema";
const donor = {
  kind: "donor",
  name: "Test Donor",
  email: "donor@example.org",
  phone: "9876543210",
  city: "Kolkata",
  availability: "Weekends",
  consent: true,
};
describe("Foundation application rules", () => {
  it("requires explicit privacy consent", () =>
    expect(submissionSchema.safeParse({ ...donor, consent: false }).success).toBe(false));
  it("allows a donor to omit their blood group", () =>
    expect(submissionSchema.safeParse(donor).success).toBe(true));
  it("rejects invalid blood groups", () =>
    expect(submissionSchema.safeParse({ ...donor, blood_group: "C+" }).success).toBe(false));
  it("requires phone, city and availability for donor interest", () => {
    for (const key of ["phone", "city", "availability"])
      expect(submissionSchema.safeParse({ ...donor, [key]: "" }).success).toBe(false);
  });
  it("requires volunteer area of interest", () =>
    expect(submissionSchema.safeParse({ ...donor, kind: "volunteer" }).success).toBe(false));
  it("rejects a filled spam trap", () =>
    expect(submissionSchema.safeParse({ ...donor, website: "spam" }).success).toBe(false));
});
