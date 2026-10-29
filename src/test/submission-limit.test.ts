import { describe, expect, it } from "vitest";
import { emptyToNull, submissionIsLimited } from "@/lib/submission-messages";

describe("MySQL submission limits", () => {
  it("allows fewer than five submissions from the same email in an hour", () => {
    expect(submissionIsLimited(4)).toBe(false);
  });

  it("blocks the fifth repeat submission from the same email", () => {
    expect(submissionIsLimited(5)).toBe(true);
  });

  it("stores blank optional answers as null", () => {
    expect(emptyToNull("  ")).toBeNull();
    expect(emptyToNull(undefined)).toBeNull();
    expect(emptyToNull("Kolkata")).toBe("Kolkata");
  });
});
