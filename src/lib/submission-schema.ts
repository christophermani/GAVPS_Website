import { z } from "zod";
const optionalText = z.string().trim().max(1000).optional();
export const submissionSchema = z
  .object({
    kind: z.enum(["volunteer", "donor", "contact", "newsletter", "partner", "event"]),
    name: z.string().trim().min(2, "Please enter your full name.").max(100),
    email: z.string().trim().email("Please enter a valid email address.").max(255),
    phone: z
      .string()
      .trim()
      .regex(/^[+\d\s()-]{7,20}$/, "Please enter a valid phone number.")
      .optional()
      .or(z.literal("")),
    city: optionalText,
    interest: optionalText,
    skills: optionalText,
    availability: optionalText,
    message: optionalText,
    blood_group: z
      .enum(["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"])
      .optional(),
    consent: z.boolean().refine((v) => v, "Please give your privacy consent."),
    website: z.string().max(0, "Unable to submit.").optional(),
  })
  .superRefine((data, ctx) => {
    if (["volunteer", "donor"].includes(data.kind)) {
      for (const key of ["phone", "city", "availability"] as const)
        if (!data[key]?.trim())
          ctx.addIssue({ code: "custom", path: [key], message: "This field is required." });
    }
    if (data.kind === "volunteer" && !data.interest?.trim())
      ctx.addIssue({
        code: "custom",
        path: ["interest"],
        message: "Please select an area of interest.",
      });
    if (["contact", "partner"].includes(data.kind) && !data.message?.trim())
      ctx.addIssue({ code: "custom", path: ["message"], message: "Please enter your message." });
  });
export type Submission = z.infer<typeof submissionSchema>;
